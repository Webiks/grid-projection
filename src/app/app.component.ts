import { Component } from '@angular/core';
import { LayersService } from './layers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  maps = {
    world: {
      projection: 'EPSG:4326',
      layer: this.layers.data.BING,
      position: {
        center: [34.909490575692566, 32.30868923493098],
        rotation: 3.256102283489895,
        zoom: 18,
      }
    },
    image: {
      layer: this.layers.data.WMS.imageA,
      position: {
        center: [981.7701764490478, -1059.4717664138395],
        rotation: 0,
        zoom: 2,
      },
    }
  };

  clicks = [];
  tmpClick = [];

  clickOnMap = (e) => {
    this.tmpClick.push(e);
    if (this.tmpClick.length === 2) {
      this.clicks.push(this.tmpClick);
      this.tmpClick = [];
    }
  };

  clearAll = () => this.clicks = [];
  clear = (index) => this.clicks = this.clicks.filter((c, i) => i !== index);

  constructor(public layers: LayersService) {
  }
}

