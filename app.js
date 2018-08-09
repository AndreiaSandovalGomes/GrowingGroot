var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
// console.log(USER_ID);

$(document).ready(function() {
  $('.title-splash').delay('1000').fadeIn('slow');
  $('.gif-splash').delay('2000').fadeIn('slow');
  $('.splash-content').delay('5000').fadeOut('slow');
  $('.splash').delay('6000').fadeOut('slow');


  // $(".includePoints").click(function(e))
  // e.preventDefault();

  $(".btnSumPoints").click(addTasksClick);

  });
  function addTasksClick(event) {
    event.preventDefault();

    var newTask = $("#points").val();
    var taskFromDB = addTaskToDB(newTask);

    createListItem(newTask, taskFromDB.key)
  }
  function addTaskToDB(text) {
    return database.ref("Pontuacao" + USER_ID).push({
      text: text
    });
  }
  function getTasksFromDB() {
    database.ref("pontuacao" + USER_ID).once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          createListItem(childData.text, childKey);
          console.log("salvo");
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
});
