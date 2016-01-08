var axios = require('axios');

var protocol =  window.location.protocol == 'https:' ? 'https:' : 'http:';
var baseUrl = `${protocol}//ebird.org/ws1.1`
var defaultParams = {
    fmt: 'json',
};

var standardGet = (path) => {
    return (params) => {
        return axios.get(`${baseUrl}${path}`, {
            params: {
                ...defaultParams,
                ...params,
            },
        }).then((response) => {
            return response.data;
        }).catch((response) => {
            return response.data;
        });
    };
};

var ebird = {
    data: {
        obs: {
            geo: {
                recent: standardGet('/data/obs/geo/recent'),
            },

            geo_spp: {
                recent: standardGet('/data/obs/geo_spp/recent'),
            },

            hotspot: {
                recent: standardGet('/data/obs/hotspot/recent'),
            },

            hotspot_spp: {
                recent: standardGet('/data/obs/hotspot_spp/recent'),
            },

            loc: {
                recent: standardGet('/data/obs/loc/recent'),
            },

            loc_spp: {
                recent: standardGet('/data/obs/loc_spp/recent'),
            },

            region: {
                recent: standardGet('/data/obs/region/recent'),
            },

            region_spp: {
                recent: standardGet('/data/obs/region_spp/recent'),
            },
        },

        notable: {
            geo: {
                recent: standardGet('/data/notable/geo/recent'),
            },

            hotspot: {
                recent: standardGet('/data/notable/hotspot/recent'),
            },

            loc: {
                recent: standardGet('/data/notable/loc/recent'),
            },

            region: {
                recent: standardGet('/data/notable/region/recent'),
            },
        },

        nearest: {
            geo_spp: {
                recent: standardGet('/data/nearest/geo_spp/recent'),
            }
        },
    },

    product: {
        obs: {
            hotspot: {
                recent: standardGet('/product/obs/hotspot/recent'),
            },
        },
    },

    ref: {
        taxa: standardGet('/ref/taxa/ebird'),

        hotspot: {
            region: standardGet('/ref/hotspot/region'),
            geo: standardGet('/ref/hotspot/geo'),
        },

        location: standardGet('/ref/location'),
    },
};

module.exports = ebird;