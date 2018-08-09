var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
// console.log(USER_ID);

$(document).ready(function() {
  $('.title-splash').delay('1000').fadeIn('slow');
  $('.gif-splash').delay('2000').fadeIn('slow');
  $('.splash-content').delay('4000').fadeOut('slow');
  $('#splash').delay('6000').fadeOut('slow');

  // $(".includePoints").click(function(e))
  // e.preventDefault();

  // getTasksFromDB();
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
