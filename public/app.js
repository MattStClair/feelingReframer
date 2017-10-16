'use strict';

$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(console.log);

$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/sad/', method: 'GET'}).then(console.log);

$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/angry/', method: 'GET'}).then(console.log);

$.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/fear/', method: 'GET'}).then(console.log);



//  const array1 = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/sad/JSON',
//  method: 'GET'});
//
// console.log(array1);
//need to access this object...some how

console.log("what the hell?");



function showHappyWords(){
  $('.happyList').hide();
  $('.happybutton').click(function() {
    $('.happyList').toggle(1000);
  });

}

function showSadWords(){
  $('.sadList').hide();
  $('.sadbutton').click(function() {
    $('.sadList').toggle(1000);
  });

}

function showAngryWords(){
  $('.angryList').hide();
  $('.angrybutton').click(function() {
    $('.angryList').toggle(1000);
  });

}
function showScaredWords(){
  $('.scaredList').hide();
  $('.scaredbutton').click(function() {
    $('.scaredList').toggle(1000);
  });

}


showAngryWords();
showScaredWords();

showSadWords();
showHappyWords();
