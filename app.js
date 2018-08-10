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

  $(".btn-category").click(function(e) {
  e.preventDefault();
  showTasks(this);
  });
  $(".category").data( "status", "open" );

function showTasks(buttonCategory) {
  $(".category").text("");
  var status = $(".category").data("status");
  if (status === "open") {
    var category = buttonCategory.id;
    var array = defineArray(category);
    var divCategory = ".category-" + category;
    for (i in array) {
      createHtml(array[i], divCategory);
    }
  $(".category").data( "status" , "close");
  } else if (status === "close") {
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
  if (localCategory === "tips") {
    return allTasks.tips;
  }
}

function createHtml(eachTask, div) {
  var divTasks = document.createElement("div");
  divTasks.className = "task";
  divTasks.innerHTML = eachTask + "<span class='pts'> - 10 pontos </span>";
  if (div != ".category-tips") {
   divTasks.addEventListener("click", countPoints);
  }
  $(div).append(divTasks);
}


function countPoints() {
  var sum = 10; // points vai ser o valor do banco de dados
  console.log("a soma é: ")
  //enviar valor pro banco de dados
  // levelPoints(sum);
}

var allTasks = {
  tasksHome: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Apaguei as luzes ao sair do ambiente","Desliguei todos os aparelhos da tomada"],
  tasksWork: ["Não usei copo descartável","Usei a escada", "Economizar papel","Meu lanche/almoço não gerou lixo","Não usei o carro"],
  tasksFun: ["Não joguei lixo na rua","Não usei canudo", "Usei sacola retornável","Joguei o lixo na lixeira certa", "Fui de bike/a pé"],
  tips: ["Gosta de cerveja? Consuma latinhas e evite o vidro. Fica Dica!!!","Sabe aquela gaveta cheia de remédios e pomadas vencidos que você não sabe o que fazer? Existem muitas farmácias com coletores para destinar corretamente estes descartes", "Sabe aquelas lâmpadas queimadas que não servem para mais nada. Existem grandes redes de mercados com coletores para estes descartes."]
}
