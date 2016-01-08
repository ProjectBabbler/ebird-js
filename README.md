# ebird-js
JS wrapper to the ebird API.

[![Build Status](https://travis-ci.org/gregthebusker/ebird-js.svg)](https://travis-ci.org/gregthebusker/ebird-js)

[ebird 1.1 docs](https://confluence.cornell.edu/display/CLOISAPI/eBird+API+1.1)

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

ebirds.obs.geo.recent(params).then((response) => {
    // An array of observations
    console.log(response);
}).catch((error) => {
    console.log(error);
})
```

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