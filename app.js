const express = require('express');
// const path = require('path');
const logger = require('morgan');
// const bodyParser = require('body-parser')
const routes = require('./router/index')
// const passportAuth = require('./config/passport-jwt')

const app = express();

// const notFoundMiddleware = require('./middlewares/not-found');
// const errorHandlerMiddleware = require('./middlewares/handler-error');

// app.use('/uploads', express.static("upload"))
app.use(logger('combined'));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.get('/health-check', (req, res) => {
    res.status(200).json({
        message: "Connected"
    });
});


// app.use(passportAuth.initialize());
app.use(routes);
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);
module.exports = app