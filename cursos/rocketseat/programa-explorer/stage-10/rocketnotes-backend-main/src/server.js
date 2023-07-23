require('express-async-errors');
require('dotenv/config');

const migrationsRun = require('./database/sqlite/migrations');

const AppError = require('./utils/AppError');
const uploadConfig = require('./configs/upload');

const express = require('express');
const cors = require('cors');

const routes = require('./routes/index.js');

migrationsRun();

const app = express();
app.use(cors());

//definir as requisições do Body vem em formato json
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));