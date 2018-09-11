'use strict';

// CORS_HEADERS
// Change the value at line 12

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers['Access-Control-Allow-Origin'.toLowerCase()] = [{
        key: 'Access-Control-Allow-Origin',
        value: 'https://my.domain.com',
    }];

    headers['Access-Control-Allow-Headers'.toLowerCase()] = [{
        key: 'Access-Control-Allow-Headers',
        value: '*',
    }];

    headers['Access-Control-Expose-Headers'.toLowerCase()] = [{
        key: 'Access-Control-Expose-Headers',
        value: '*',
    }];

    headers['Access-Control-Allow-Credentials'.toLowerCase()] = [{
        key: 'Access-Control-Allow-Credentials',
        value: 'true',
    }];
    
    headers['Access-Control-Allow-Methods'.toLowerCase()] = [{
        key: 'Access-Control-Allow-Methods',
        value: 'GET, HEAD, OPTIONS',
    }];

    callback(null, response);
};
