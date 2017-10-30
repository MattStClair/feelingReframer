'use strict';


var str = '';

//var word = document.getElementById('wordSearch');///get elementby id
var word = 'sad';
console.log(word);

function getResults(word) {

//this resquest creates the words===========================>
var objectArray = $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/' + word + '/', method: 'GET'}).then(function(nameOfStuffComingBack)
{
  for(var i = 0; i < nameOfStuffComingBack.length; i++){

    str = str + nameOfStuffComingBack[i];};
});

//this request edits them=====================================>
  $.ajax({url: 'http://words.bighugelabs.com/api/2/dd5bfddecdc1451b1ba9c7ac2ed20f4e/' + word + '/', method: 'GET'}).then(function(nameOfStuffComingBack)
   {
  for(var i = 0; i < nameOfStuffComingBack.length; i++)
      {
    var rep = str.replace(/adjective|syn|rel|sim|unhappy|ant|\W+/g, ' ');
      }

  var output = document.getElementById('output');
  output.innerHTML = 'stuff is there' + rep;

  //console.log(nameOfStuffComingBack);
});


}

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

document.getElementById('searchButton').addEventListener('click', function() {
    // display the current click count inside the clicked div
  getResults(word);

},false);


showAngryWords();
showScaredWords();

showSadWords();
showHappyWords();
