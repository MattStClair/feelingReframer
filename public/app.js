'use strict';

$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(console.log)






//then(data => data.forEach(word => $('#results').append(`<p>${word}</p>`)))


// $.get('/github/user/repos')
// // .then(success, fail)
// .then(
//   // success
//   data => data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`)),
//   // fail
//   err => console.error(err.status, err.statusText, 'is the way my stuff is broken'))
