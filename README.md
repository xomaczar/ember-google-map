# ember-google-map

An Ember addon to include a google-map Ember friendly component in your apps.

**This is a work in progress, plan is to handle info-windows and other tools provided by google-map API.**

## What is implemented for now:

Here is what is working for now:
    
```handlebars
{{google-map lat=centerLat lng=centerLng zoom=zoom type=type markers=markersArray}}
```

* `lat` and `lng`: bindings or static coordinates of the center
* `zoom`: binding to the current zoom
* `type`: binding to the type of map (can be found with `import {MAP_TYPES} from 'google-map/components/google-map';`)
* `markerController`: the `ObjectController` to use as a marker controller, must extend from `google-map/controllers/marker`
* `markers`: binding to an array of markers (all properties are bound back an forth)
    * `isClickable`: if the marker is clickable
    * `isVisible`:  marker visibility
    * `isDraggable`: marker draggability
    * `title`: marker's title
    * `opacity`: marker's opacity
    * `icon`: marker's icon
    * `zIndex`: marker's z-index
    * `googleEvents`: an object with a mapping from google event to an Ember action name (string) or a function to be run

## TODO:

* Implement info-windows attached to markers or not
* Implement an auto-complete input for an address:
    ```handlebars
    {{google-address
        value=theText
        resolvedGoogleData=thePropertyToStoreGoogleData
        resolvedLat=thePropertyWhereToStoreAddressLatitude
        resolvedLng=thePropertyWhereToStoreAddressLongitude
        boundNorthWestLat=optionalBoundNorthWestLatitude
        boundNorthWestLng=optionalBoundNorthWestLongitude
        boundSouthEastLat=optionalBoundSouthEastLatitude
        boundSouthEastLng=optionalBoundSouthEastLongitude
        map=theOptionalMapToBeLinked
    }}
    ```
* Write unit tests!!!


## Installation

* `npm install --save-dev ember-google-map`

## Using

```js
// app/controllers/application.js
import Ember from 'ember';
import {MAP_TYPES} from 'google-map/components/google-map';

export default Ember.Controller.extend({
  lat:     0,
  lng:     0,
  zoom:    5,
  type:    'road',
  mapTypes: MAP_TYPES,
  markers: [
    {title: 'one', lat: 5, lng: 5},
    {title: 'two', lat: 5, lng: 0}
  ]
});
```

```handlebars
// app/templates/application.hbs
{{google-map lat=lat lng=lng type=type zoom=zoom markers=markers}}

<div>
  <label>Lat: {{input value=lat}}</label>
  <label>Lng: {{input value=lng}}</label>
  <label>Zoom: {{input value=zoom}}</label>
  <label>Type: {{view Ember.Select content=mapTypes
  optionLabelPath='content.label' optionValuePath='content.id' value=type}}</label>
</div>
```