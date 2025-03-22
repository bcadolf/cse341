const swagAuto = require('swagger-autogen')

const doc = {
    info: {
        title: 'Product Api',
        description: 'Product Api'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const output = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swagAuto(output, endpointsFile, doc);