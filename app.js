'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

function proxyGitHub(req, res, next){
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestProxy({
    url: `http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/word/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.dd5bfddecdc1451b1ba9c7ac2ed20f4e}`
    }
  }))(req, res);
}

app.get('/github/*', proxyGitHub);

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
