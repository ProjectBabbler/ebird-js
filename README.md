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

#### data.obs.geo_spp.recent

returns recent nearby observations of a species

```
    ebird.data.obs.geo_spp.recent(params)
```

#### data.obs.hotspot.recent

returns recent observations at hotspots

```
    ebird.data.obs.hotspot.recent(params)
```

#### data.obs.hotspot_spp.recent

returns recent observations of a species at hotspots

```
    ebird.data.obs.hotspot_spp.recent(params)
```

#### data.obs.loc.recent

returns recent observations at locations

```
    ebird.data.obs.loc.recent(params)
```

#### data.obs.loc_spp.recent

returns recent observations of a species at locations

```
    ebird.data.obs.loc_spp.recent(params)
```

#### data.obs.region.recent

returns recent observations in a region

```
    ebird.data.obs.region.recent(params)
```

#### data.obs.region_spp.recent

returns recent observations of a species in a region

```
    ebird.data.obs.region_spp.recent(params)
```

#### data.notable.geo.recent

returns recent nearby notable observations

```
    ebird.data.notable.geo.recent(params)
```

#### data.notable.hotspot.recent

returns recent notable observations at hotspots

```
    ebird.data.notable.hotspot.recent(params)
```

#### data.notable.loc.recent

returns recent notable observations at locations

```
    ebird.data.notable.loc.recent(params)
```

#### data.notable.region.recent

returns recent notable observations in a region

```
    ebird.data.notable.region.recent(params)
```

#### data.nearest.geo_spp.recent

returns nearest locations with observations of a species

```
    ebird.data.nearest.geo_spp.recent(params)
```

### products

This path contains products consisting of aggregated raw data.

#### product.obs.hotspot.recent

This service provides a summary of recent sightings for birding hotspots.

```
    ebird.data.nearest.geo_spp.recent(params)
```

### ref

This path contains supporting lookup services for the /data and /product services

#### ref.taxa

returns species in the ebird taxonomy

```
    ebird.ref.taxa(params)
```

#### ref.hotspot.region

provides a list of eBird hotspots for a given region, optionally filtered to those with recent data

```
    ebird.ref.hotspot.region(params)
```

#### ref.hotspot.geo

provides a list of nearby eBird hotspots, optionally filtered to those with recent data

```
    ebird.ref.hotspot.geo(params)
```

#### ref.location

returns location-based look-up data
```
    ebird.ref.location(params)
```