const express = require('express');
const authRouter = require('./routers/authRouter');
const usersRouter = require('./routers/usersRouter');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', authRouter);
app.use('/user', usersRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;