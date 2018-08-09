$(document).ready(function() {
  $('.title-splash').delay('1000').fadeIn('slow');
  $('.gif-splash').delay('2000').fadeIn('slow');
  $('.splash-content').delay('5000').fadeOut('slow');
  $('.splash').delay('6000').fadeOut('slow');


  // $(".includePoints").click(function(e))
  // e.preventDefault();

  //barra de xp
const levelOne = 30;
const levelTwo = 50;
const levelThree = 70;
const levelFour = 100;
function levelPoints (totalPoints){
  var levelAtual = 0;
  var changeLevel = $("#levelNivel");
  if (totalPoints >= levelOne){
    changeLevel.html("1");
  }
}










});
