import { mat3 } from 'gl-matrix';
import dlt from 'dltjs';
import * as math from 'mathjs';

const SOURCE = 0;
const DEST = 1;

export function createTransformer(TRANSFORM_MATRIX) {
  const { world, image } = TRANSFORM_MATRIX.reduce((prev, [pixel, lnglat]) => ({
    world: [...prev.world, lnglat], image: [...prev.image, pixel]
  }), { world: [], image: [] });

  const A = dlt.dlt2d(world, image);
  const invA = math.inv(A);

  return {
    fromPixel: (coords) => dlt.transform2d(invA, coords),
    toPixel: (coords) => dlt.transform2d(A, coords)
  };
}

function transformArrayToPairs(array) {
  return array.reduce((result, item, index) => (
    index % 2 ? result : [...result, [item, array[index + 1]]]
  ), []);
}

function isBetween(test, one, sec) {
  return (one <= test && test <= sec) || (test <= one && sec <= test);
}

export const findClosestMat = (x, y, matrix, source) => {
  let indexRow; // = 0
  let indexCell; // = 0
  // find X
  matrix.forEach((row, rowIndex) => {
    transformArrayToPairs(row)
      .forEach(([prev, next], evenCellIndex) => {
        const [prevX, prevY] = prev[source];
        const [nextX, nextY] = next[source];
        if (isBetween(x, prevX, nextX)) {
          console.log('isBetween x');
          indexCell = evenCellIndex * 2;
        }
      });
  });

  // find Y
  transformArrayToPairs(matrix)
    .forEach(([[prevFirstCell], [nextFirstCell]], evenRowIndex) => {
      const prevY = prevFirstCell[source][1];
      const nextY = nextFirstCell[source][1];
      if (isBetween(y, prevY, nextY)) {
        indexRow = evenRowIndex * 2;
      }
    });

  console.log({ indexRow, indexCell, x });
  if (!indexRow) {
    indexRow = 0;
    console.log('HELP! indexRow');
  }
  if (!indexCell) {
    indexCell = 0;
    console.log('HELP! indexCell');
  }
  const p1 = matrix[indexRow][indexCell]; // matrix[0][0]; // x1,y1
  const p2 = matrix[indexRow + 1][indexCell]; // matrix[1][0]; // x2,y1
  const p3 = matrix[indexRow][indexCell + 1]; // matrix[0][1]; // x1,y2
  const p4 = matrix[indexRow + 1][indexCell + 1]; // matrix[1][1]; // x2,y2

  return [
    [p1, p2],
    [p3, p4]
  ];
};

export const createBilinearInterpolationTransformer = (matrix) => {
  console.log(createBilinearInterpolationTransformer, matrix);
  return {
    fromPixel: ([x, y]) => {
      y = -y;
      const [
        [p1, p2],
        [p3, p4]
      ] = findClosestMat(x, y, matrix, SOURCE);


      const Q11 = p1[SOURCE];
      const Q12 = p2[SOURCE];
      const Q21 = p3[SOURCE];
      const Q22 = p4[SOURCE];

      const FQ11 = p1[1 - SOURCE];
      const FQ12 = p2[1 - SOURCE];
      const FQ21 = p3[1 - SOURCE];
      const FQ22 = p4[1 - SOURCE];

      const [x1, y1] = Q11;
      const [x2, y2] = Q22;

      const arg1 = (1 / ((x2 - x1) * (y2 - y1)));
      const m1 = math.matrix([x2 - x, x - x1]);
      const forLNG = math.matrix([[FQ11[0], FQ12[0]], [FQ21[0], FQ22[0]]]);
      const forLAT = math.matrix([[FQ11[1], FQ12[1]], [FQ21[1], FQ22[1]]]);
      const m3 = math.matrix([y2 - y, y - y1]);

      const lng = math.multiply(arg1, m1, forLNG, m3);
      const lat = math.multiply(arg1, m1, forLAT, m3);
      return [lng, lat];
    },
    toPixel: ([lng, lat]) => {
      const [
        [p1, p2],
        [p3, p4]
      ] = findClosestMat(lng, lat, matrix, DEST);

      const Q11 = p1[DEST];
      const Q12 = p2[DEST];
      const Q21 = p3[DEST];
      const Q22 = p4[DEST];

      const FQ11 = p1[1 - DEST];
      const FQ12 = p2[1 - DEST];
      const FQ21 = p3[1 - DEST];
      const FQ22 = p4[1 - DEST];

      const [x1, y1] = Q11;
      const [x2, y2] = Q22;

      const arg1 = (1 / ((x2 - x1) * (y2 - y1)));
      const m1 = math.matrix([x2 - lng, lng - x1]);
      const forX = math.matrix([[FQ11[0], FQ12[0]], [FQ21[0], FQ22[0]]]);
      const forY = math.matrix([[FQ11[1], FQ12[1]], [FQ21[1], FQ22[1]]]);
      const m3 = math.matrix([y2 - lat, lat - y1]);
      const x = math.multiply(arg1, m1, forX, m3);
      const y = math.multiply(arg1, m1, forY, m3);
      console.log([x, y]);
      return [x, -y];
    }
  };
};
