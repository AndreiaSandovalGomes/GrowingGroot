// var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
//
// $(document).ready(function() {
//   $('.title-splash').delay('1000').fadeIn('slow');
//   $('.gif-splash').delay('2000').fadeIn('slow');
//   $('.splash-content').delay('5000').fadeOut('slow');
//   $('.splash').delay('6000').fadeOut('slow');
//
// var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

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


  $(".btnSumPoints").click(addTasksClick);


  function addTasksClick(event) {
    event.preventDefault();

    var newTask = $("#points").val();
    var taskFromDB = addTaskToDB(newTask);

    createListItem(newTask, taskFromDB.key)
  }
  function addTaskToDB(text) {
    return database.ref("Pontuacao" + USER_ID).set({
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
  };

  $(".btn-category").click(function(e) {
  e.preventDefault();
  showTasks(this);
  });
  $(".category").data( "status", "open" );

function showTasks(buttonCategory) {
  $(".category").text("");
  var status = $(".category").data("status");
  console.log(status)
  if (status === "open") {
    var category = buttonCategory.id;
    var array = defineArray(category);
    var divCategory = ".category-" + category;
    for (i in array) {
      createHtml(array[i], divCategory);
    }
  $(".category").data( "status" , "close");
  } else if (status === "close") {
    console.log("entrou no else")
    $(".category").text("");
    $(".category").data( "status", "open" );
  }
}

function defineArray(localCategory) {
  if (localCategory === "home") {
    return allTasks.tasksHome;
  }
  if (localCategory === "work") {
    return allTasks.tasksWork;
  }
  if (localCategory === "fun") {
    return allTasks.tasksFun;
  }
}

function createHtml(eachTask, div) {
  var divTasks = document.createElement("div");
  divTasks.className = "task";
  divTasks.innerHTML = eachTask + "<span class='pts'> - 10 pontos </span>";
  divTasks.addEventListener("click", countPoints);
  $(div).append(divTasks);
}


function countPoints() {
  var sum = points + 10; // points vai ser o valor do banco de dados
  console.log("a soma é: " + sum)
  //enviar valor pro banco de dados
  // levelPoints(sum);
}

var allTasks = {
  tasksHome: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksWork: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksFun: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"]
}
