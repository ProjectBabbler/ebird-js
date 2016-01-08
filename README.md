# ebird-js
JS wrapper to the ebird API.

[![Build Status](https://travis-ci.org/ProjectBabbler/ebird-js.svg)](https://travis-ci.org/ProjectBabbler/ebird-js)

[ebird 1.1 docs](https://confluence.cornell.edu/display/CLOISAPI/eBird+API+1.1)

ebird-js is just a convenience library for interacting with the ebird 1.1 api.

## How to use

```
npm install --save ebird-js
```

```
var ebird = require(ebird-js);

var params = {
    lng: '-76.51',
    lat: '42.46',
};

ebirds.obs.geo.recent(params).then((data) => {
    // An array of observations
    console.log(data);
}).catch((error) => {
    console.log(error);
})
```

## Default Params
`fmt` defaults to `json`.

All others see [ebird 1.1 docs](https://confluence.cornell.edu/display/CLOISAPI/eBird+API+1.1)

## Endpoints

### data
This path contains data services.

#### data.obs.geo.recent

returns recent nearby observations

```
    ebird.data.obs.geo.recent(params)
```

### products

### ref

This path contains supporting lookup services for the /data and /product services

#### ref.taxa

returns species in the ebird taxonomy

```
    ebird.data.obs.geo.recent(params)
```
