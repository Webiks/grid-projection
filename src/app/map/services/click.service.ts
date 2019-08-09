import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import Map from 'ol/Map';

@Injectable()
export class ClickService implements OnDestroy {
  map: Map;
  emitter: EventEmitter<any>;

  onClick = (e) => {
    this.emitter.emit(e);
  };

  init(map: Map, emitter: EventEmitter<any>) {
    this.map = map;
    this.emitter = emitter;
    map.on('click', this.onClick);
  }

  ngOnDestroy(): void {
    this.map.un('click', this.onClick);
  }

  constructor() {
  }
}
