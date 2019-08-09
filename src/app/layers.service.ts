import { Injectable } from '@angular/core';
import { createBilinearInterpolationTransformer, createTransformer } from './transforms';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps';

import TileWMS from 'ol/source/TileWMS';
import Projection from 'ol/proj/Projection';
import * as proj from 'ol/proj';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class LayersService {
  data: any = {
    OSM: new TileLayer({
      source: new OSM(),
      extent: proj.transformExtent([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857')
    }),
    BING: new TileLayer({
      source: new BingMaps({ ...DATA.BING }),
      extent: proj.transformExtent([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857')
    }),
    WMS: Object.entries(DATA.WMS).reduce((prev, [key, layer]: any) => ({
      ...prev,
      [key]: new TileLayer({
        source: new TileWMS({
          projection: this.createImageProjection(layer.TRANSFORM_MATRIX3, layer.extent),
          url: layer.url,
          params: {
            VERSION: '1.1.1',
            LAYERS: layer.LAYERS
          }
        })
      })
    }), {})
  };

  createImageProjection(matrix, extent) {
    const projection = new Projection({
      code: 'EPSG:32662',
      units: 'pixels',
      extent
    });

    // const transformer = createTransformer(matrix);
    // proj.addCoordinateTransforms(projection, 'EPSG:3857', transformer.fromPixel, transformer.toPixel);

    const bilinearInterpolationTransformer = createBilinearInterpolationTransformer(matrix);
    proj.addCoordinateTransforms(projection, 'EPSG:4326', bilinearInterpolationTransformer.fromPixel, bilinearInterpolationTransformer.toPixel);

    proj.addProjection(projection);
    return projection;
  }
}
