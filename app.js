var database = firebase.database();
var points = 0; //valor do banco de dados
$(".total-points").text(points);

$(document).ready(function() {
  $(".btn-category").click(function(e) {
  e.preventDefault();
  showTasks(this);
  })
  $(".total-points").text(points);
});

function showTasks(buttonCategory) {
  $(".category").text("");
  var category = buttonCategory.id;
  var array = defineArray(category);
  var divCategory = ".category-" + category;
  for (i in array) {
    createHtml(array[i], divCategory);
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
  console.log(eachTask)
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
  $(".total-points").text(points);
}

var allTasks = {
  tasksHome: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksWork: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksFun: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"]
}
