const swaggerAutogen = require('swagger-autogen');

const swagAuto = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Temple API'
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const output = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(output, endpointsFiles, doc);