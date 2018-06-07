import * as ol from 'openlayers';

export class BaseMapComponent {

    bingStyles = [
        'Road',
        'RoadOnDemand',
        'Aerial',
        'AerialWithLabels',
        'collinsBart',
        'ordnanceSurvey'
    ];

    source: ol.layer.Tile
    map: ol.Map;
    layers: any = [];
    layer: ol.Tile;
    view: ol.View;
    projection;



    constructor() {
        this.projection= new ol.proj.Projection({
            code: 'EPSG:21781',
            // The extent is used to determine zoom level 0. Recommended values for a
            // projection's validity extent can be found at https://epsg.io/.
            extent: [485869.5728, 76443.1884, 837076.5648, 299941.7864],
            units: 'm'
        });
        ol.proj.addProjection(this.projection);
    }
}