import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { PointermoveService } from './services/pointermove.service';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [PointermoveService, ClickService]
})
export class MapComponent implements OnInit, OnDestroy {
  map: Map;
  @Output() pointerMove = new EventEmitter();
  @Output() clickOnMap = new EventEmitter();

  @ViewChild('map', { static: true }) mapElem: ElementRef;
  @Input() name;
  @Input() layer;
  @Input() position;
  @Input() projection;

  @Input()
  set pointerEvent(e) {
    this.pointermoveService.pointerEvent = e;
  }

  constructor(protected pointermoveService: PointermoveService,
              protected clickService: ClickService) {
  }

  initMap() {
    const { nativeElement: target } = this.mapElem;
    const layerProjection = this.layer.getSource().getProjection();
    const projection = this.projection || layerProjection;
    const view = new View({ center: [0, 0], zoom: 3, projection });

    if (this.position) {
      setTimeout(() => {
        const { zoom, rotation, center } = this.position;
        view.setZoom(zoom);
        view.setRotation(rotation);
        view.setCenter(center);
      }, 0);
    }

    return new Map({ target, view, layers: [this.layer] });
  }

  ngOnInit() {
    this.map = this.initMap();
    console.log(this.map.getView().getProjection().getExtent());
    window[this.name] = this.map;
    this.pointermoveService.init(this.map, this.pointerMove);
    this.clickService.init(this.map, this.clickOnMap);
  }

  ngOnDestroy() {
    this.map.setTarget(null);
  }


}
