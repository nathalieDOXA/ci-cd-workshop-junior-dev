const express = require('express');

const feature1 = require('./feature1').default;

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
);

app.get('/', (req, res) => {
  res.send(`Hello ${feature1.registerName(req)}`);
});

const stop = () => {
  server.close();
}

module.exports = server;
module.exports.stop = stop;
