const express = require('express');
const app = express();

const morgan = require('morgan')


const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

app.use(morgan('NODE_ENV'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Iam middleware 🥰🤦');
  next();
});

app.use((req, res, next) => {
  (req.reqestTime = new Date()).toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;
