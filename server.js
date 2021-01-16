const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
//mantra route
const mantrasRouter = require('./routes/api/mantras')
//me time route
// HELLO
//deal breaker route
const dealBreakersRouter = require('./routes/api/dealBreakers')
//playlist route

//affirmations route

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
//mantra route middleware
app.use('/api/mantras', mantrasRouter)
//me time route middleware

//deal breakers route middleware
app.use('/api/dealBreakers', dealBreakersRouter)
//playlist route middleware

//affirmations route middleware

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
