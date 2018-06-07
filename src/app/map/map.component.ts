import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';
import { BaseMapComponent } from './map.base.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent extends BaseMapComponent implements OnInit {

  constructor() {
    super();
  }
  
  ngOnInit() {
    this.layers.push( new ol.layer.Tile({
      visible: true,
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'Aic0WT6qKBg8hqpsDx4pxWd8WeuPcOIjC6to8a6l7SIIoDrVXpSN1ZQBlv7YDLYr',
        imagerySet: this.bingStyles[0]
        // use maxZoom 19 to see stretched tiles instead of the BingMaps
        // "no photos at this zoom level" tiles
        // maxZoom: 19
      })
    }));

    this.view = new ol.View({
      projection: 'EPSG:3857',
      center: ol.proj.transform([29.23, 40.86], 'EPSG:4326', 'EPSG:3857'),
      zoom: 13
    });

    this.map = new ol.Map({
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({
          units: 'metric'
        })
      ]),
      layers: this.layers,
      loadTilesWhileInteracting: true,
      target:"map",
      view:this.view,
      
    });
  }

}
