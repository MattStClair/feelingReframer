'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');
console.log(process.env.DARRYL, '= Darryl');
const thesaurus = require('powerthesaurus-api');



app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

function proxyGitHub(req, res, next){
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//dfee4dbe0671481edf8976024618356c10c54589






//
//
// var objectArray = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/' + word + '/', method: 'GET'}).then(function(nameOfStuffComingBack)
// {
//   for(var i = 0; i < nameOfStuffComingBack.length; i++){
//
//     str = str + nameOfStuffComingBack[i];};
//
//
// });



//console.log(object);

//console.log(object.readyState);

//console.log(object.responseText);//works in console

//console.log(str = str + nameOfStuffComingBack[i]);
//var rep = str.replace(/adjective|syn|ant|sim|rel/g, ' ').split('|');

  //   /[,\s]+|[,\s]+/g


//  const array1 = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/sad/JSON',
//  method: 'GET'});
//
// console.log(array1);
//need to access this object...some how
//$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/sad/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/angry/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/fear/', method: 'GET'}).then(console.log);
// var myJSON = $.get({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/json', method: 'GET'});
//
// var myObj = JSON.parse(myJSON);
