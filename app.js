$(document).ready(function() {
  $(".includePoints").click(function(e))
  e.preventDefault();
})
//barra de xp
const levelOne = 30;
const levelTwo = 50;
const levelThree = 70;
const levelFour = 100;
function levelPoints (totalPoints){
  var levelAtual = 0;
  var changeLevel = $("#levelNivel");
  if (totalPoints >== levelOne){
    changeLevel.html("1");
  }
}
