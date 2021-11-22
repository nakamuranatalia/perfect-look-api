const express = require('express');
const consume = require('./consumer/consumer');
const routes = require('./routes')

const app = express();
const port = 3000

routes(app)

app.listen(port, () => console.log(`Server is up on port ${port}`))

consume()

module.exports = app;