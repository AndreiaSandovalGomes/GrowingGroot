// var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
//
// $(document).ready(function() {
//   $('.title-splash').delay('1000').fadeIn('slow');
//   $('.gif-splash').delay('2000').fadeIn('slow');
//   $('.splash-content').delay('5000').fadeOut('slow');
//   $('.splash').delay('6000').fadeOut('slow');
//
//   getTasksFromDB();
//   $(".btnSumPoints").click(addTasksClick);
// });
//
// function addTasksClick(event) {
//   event.preventDefault();
//   var newTask = $("#points").val();
//   var taskFromDB = addTaskToDB(newTask);
// }
//
// function addTaskToDB(text) {
//   return database.ref("points/" + USER_ID).set({
//     sumPoints: text
//   });
// }
//
// function getTasksFromDB() {
//   debugger
//   database.ref("points/" + USER_ID).once('value')
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       console.log(childData.sumPoints);
//     $(".retorno").(childData.sumPoints);
//     });
//   });
// }
// function returnItem(text, key) {
//   $(".retorno").text(text);
// }
//
//
// //barra de xp
// const levelOne = 30;
// const levelTwo = 50;
// const levelThree = 70;
// const levelFour = 100;
// function levelPoints (totalPoints){
//   var levelAtual = 0;
//   var changeLevel = $("#levelNivel");
//   if (totalPoints >= levelOne){
//     changeLevel.html("1");
//   }
// }

var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  $('.title-splash').delay('1000').fadeIn('slow');
  $('.gif-splash').delay('2000').fadeIn('slow');
  $('.splash-content').delay('5000').fadeOut('slow');
  $('.splash').delay('6000').fadeOut('slow');

  getTasksFromDB();
  $(".btnSumPoints").click(addTasksClick);
});

function addTasksClick(event) {
  event.preventDefault();
  var newTask = $("#points").val();
  var taskFromDB = addTaskToDB(newTask);
  getTasksFromDB();
}

function addTaskToDB(text) {
  return database.ref("points/" + USER_ID).set({
    sumPoints: text
  });
}

function getTasksFromDB() {
  database.ref("points/" + USER_ID).once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        $(".retorno").text(childData);
      });
    });
}

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
