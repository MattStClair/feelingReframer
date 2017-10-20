'use strict';

// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/sad/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/angry/', method: 'GET'}).then(console.log);
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/fear/', method: 'GET'}).then(console.log);
// var myJSON = $.get({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/json', method: 'GET'});
//
// var myObj = JSON.parse(myJSON);
//
//
// document.getElementById("demo").innerHTML = myObj.name;
//var object = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/JSON', method: 'GET'});

// var object = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(function(nameOfStuffComingBack)
// {for(var i = 0; i < nameOfStuffComingBack.length; i++){console.log(nameOfStuffComingBack[i])}});
//
// $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/happy/', method: 'GET'}).then(function(nameOfStuffComingBack)
//    {
//   for(var i = 0; i < nameOfStuffComingBack.length; i++)
//       {
//     console.log(nameOfStuffComingBack[i]);
//
//   }
//
//    var output = document.getElementById('output');
//
//    output.innerHTML = 'stuff is there' + nameOfStuffComingBack;
//
//    console.log(nameOfStuffComingBack);
// });



//console.log(object);

//console.log(object.readyState);

//console.log(object.responseText);//works in console




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
