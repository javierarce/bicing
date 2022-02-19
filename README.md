bicing
=========

Node package that returns the list of Bicing stations.

## Installation

  `yarn add bicing`

  or

  `npm install bicing`

## Usage

```javascript
let bicing = require('bicing');

bicing.get().then(result =>
  console.log(result)
);

```

That should return something like this:

```javascript
{
  stations: [
    [Object], [Object], [Object], [Object], [Object], [Object],
    ... 164 more items
  ]
}
```

Each station has this format: 

```javascript
{
  id: "1",
  type: "BIKE",
  latitude: 41.3979779,
  longitude: 2.1801069,
  streetName: "GRAN VIA CORTS CATALANES, 760",
  streetNumber: "",
  slots: 29,
  bikes: 16,
  type_bicing: 2,
  electrical_bikes: 1,
  mechanical_bikes: 15,
  status: 1,
  disponibilidad: 25,
  icon: "/modules/custom/mapa_disponibilitat/assets/icons/ubicacio-25.png",
  transition_start: "",
  transition_end: ""
}
```
