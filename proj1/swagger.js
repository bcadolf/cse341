const swagAuto = require('swagger-autogen')

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contacts Api'
    },
    host: 'https://cse341-1be6.onrender.com' || 'localhost:3000',
    schemes: ['http','https']
};

const output = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swagAuto(output, endpointsFile, doc);