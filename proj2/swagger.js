const swagAuto = require('swagger-autogen')

const doc = {
    info: {
        title: 'Product Api',
        description: 'Product Api'
    },
    host: 'proj2-7bps.onrender.com',
    schemes: ['https']
};

const output = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swagAuto(output, endpointsFile, doc);