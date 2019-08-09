import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Map from 'ol/Map';
import Style from 'ol/style/Style';

import * as proj from 'ol/proj';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';

@Injectable()
export class PointermoveService implements OnDestroy {
  vectorSource = new VectorSource();

  vectorStyle = new Style({
    image: new Circle({
      radius: 4,
      fill: new Fill({ color: 'black' }),
    })
  });

  vectorLayer = new VectorLayer({
    source: this.vectorSource,
    style: this.vectorStyle
  });

  map: Map;
  pointerMove: EventEmitter<any>;

  onPointerMove = (e) => this.pointerMove.emit(e);

  set pointerEvent(e) {
    this.vectorSource.clear();
    if (e && e.target !== this.map) {
      const fromProj = e.target.getView().getProjection();
      const toProj = this.map.getView().getProjection();
      const coords = proj.transform(e.coordinate, fromProj, toProj);
      this.vectorSource.addFeature(new Feature(new Point(coords)));
    }
  }

  init(map: Map, emitter: EventEmitter<any>) {
    this.map = map;
    this.pointerMove = emitter;

    map.on('pointermove', this.onPointerMove);
    map.addLayer(this.vectorLayer);
  }

  ngOnDestroy(): void {
    this.map.un('pointermove', this.onPointerMove);
    this.map.removeLayer(this.vectorLayer);
  }

}
