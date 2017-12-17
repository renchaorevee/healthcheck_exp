const request = require('request');

setInterval(() => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/healthcheck',
    };

    request(options, (e, r, b) => {
    	console.log('%s, statusCode: %s, healthcheck: %s', new Date(), r.statusCode, b);
    });
}, 5000);