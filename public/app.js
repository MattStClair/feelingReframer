'use strict';

var str = '';
var t = '';
var s = '';

var clicks = 0;
var ctx = document.getElementById('myChart').getContext('2d');
var word = 'sad';
var happyWord = 'happy';
var sadWord = 'sad';
var angryWord = 'angry';
var scaredWord = 'scared';



console.log(word);

function getResults() {

  //this resquest creates the words===========================>
  var objectArray = $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + word + '/', method: 'GET'}).then(function(nameOfStuffComingBack)
  {
    for(var i = 0; i < nameOfStuffComingBack.length; i++){

      str = str + nameOfStuffComingBack[i];};
    });

    //this request edits them=====================================>
    $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + word + '/', method: 'GET'}).then(function(nameOfStuffComingBack)
    {
      for(var i = 0; i < nameOfStuffComingBack.length; i++)
      {
        var rep = str.replace(/adjective|syn|rel|sim|unhappy|ant|\W+/g, ' ');
      }

      var output = document.getElementById('output');
      output.innerHTML = 'Other feelings are:  ' + rep;

      //console.log(nameOfStuffComingBack);
    });

  }

 ////////////////////get happy words////////////////////////////////


 function getHappy() {
   //this resquest creates the words===========================>
  var HappyobjectArray = $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + happyWord + '/', method: 'GET'}).then(function(happyFunction)
   {
    for(var i = 0; i < happyFunction.length; i++){

      t = t + happyFunction[i];};
  });

     //this request edits them=====================================>
   $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + happyWord + '/', method: 'GET'}).then(function(happyFunction)
     {
     for(var i = 0; i < happyFunction.length; i++)
       {
         var r = t.replace(/adjective|syn|rel|sim|unhappy|ant|\W+/g, ' ');
      }

       var Houtput = document.getElementById('happyoutput');
       Houtput.innerHTML = 'Other feelings are:  ' + r;

     });

   }


////get sadwords////////////////////////////////////////////////////////////////////////////////////////



function getSad() {
  //this resquest creates the words===========================>
 var SadobjectArray = $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + sadWord + '/', method: 'GET'}).then(function(SadFunction)
  {
   for(var i = 0; i < SadFunction.length; i++){

     s = s + SadFunction[i];};
 });

    //this request edits them=====================================>
  $.ajax({url: 'http://words.bighugelabs.com/api/2/' + token + '/' + sadWord + '/', method: 'GET'}).then(function(SadFunction)
    {
    for(var i = 0; i < SadFunction.length; i++)
      {
      var l = s.replace(/adjective|syn|rel|sim|unhappy|ant|\W+/g, ' ');
 }

    var Soutput = document.getElementById('sadoutput');
    Soutput.innerHTML = 'Other feelings are:  ' + l;

    });

  }

///////////////////////////////////////////////////////////////////////////
  function showData(){
    $('.dataSummary').hide();
    $('#dataSumClick').click(function(){
      $('.dataSummary').show(1000);
      $('.feelingHome').hide();
      $('.about').hide();
      console.log('it works');
    });
  }

  function showHome(){
    $('#homeLink').click(function(){
      $('.feelingHome').show(1000);
      $('.dataSummary').hide();
      $('.about').hide();
    });
  }

  function showAbout(){
    $('.about').hide();
    $('#aboutClick').click(function(){
      $('.about').show(1000);
      $('.dataSummary').hide();
      $('.feelingHome').hide();

    });


  }

  function showHappyWords(){
    $('.happyList').hide();
    $('.happybutton').click(function() {
      $('.happyList').toggle(1000);
      getHappy();
      clicks += 1;

      localStorage.setItem('localCount', 'clicks');

      console.log(clicks);
    });

  }

  function showSadWords(){
    $('.sadList').hide();
    $('.sadbutton').click(function() {
      $('.sadList').toggle(1000);
      getSad();
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

$('#searchButton').click(function() {
    // display the current click count inside the clicked div
  getResults();
});


  var stuff = localStorage.getItem('localCount');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Happy", "Sad", "Angry", "Scared"],
      datasets: [{
        label: '# of clicks',
        data: [10,5,4,6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

showHome();
showData();
showAngryWords();
showScaredWords();
showAbout();
showSadWords();
showHappyWords();
