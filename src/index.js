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

            },
        },
    },

    product: {

    },

    ref: {
        taxa: standardGet('/ref/taxa/ebird'),
    },
};

module.exports = ebird;