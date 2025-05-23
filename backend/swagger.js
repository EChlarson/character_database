// backend/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const isProduction = process.env.NODE_ENV === 'production';
const productionHost = 'characters-352f.onrender.com';

const doc = {
  info: {
    title: 'Fictional Characters API',
    description: 'API for managing a collection of fictional characters from young adult novels.',
  },
   host: isProduction ? productionHost : 'localhost:8080',
   schemes: isProduction ? ['https'] : ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js', './routes/characters.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);