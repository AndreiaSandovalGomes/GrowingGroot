// $(document).ready(function() {
//   $(".sign-up-button").click(signUpClick);
//   $(".sign-in-button").click(signInClick);
// });
//
//
// function signUpClick(event) {
//   event.preventDefault();
//   var email = $(".sign-email").val();
//   var password = $(".sign-password").val();
//   createUser(email, password);
// }
//
// function createUser(email, password) {
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function() {
//       alert("Cadastro concluido com sucesso !!!\n " + email)
//     })
//     .catch(function(error) {
//       handleError(error);
//     });
// }
//
// function signInClick(event) {
//   event.preventDefault();
//   var email = $(".sign-email").val();
//   var password = $(".sign-password").val();
//   signInUser(email, password);
// }
//
// function signInUser(email, password) {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function(response) {
//       var userId = response.user.uid;
//       redirectToTasks(userId);
//     })
//     .catch(function(error) {
//       handleError(error)
//     });
// }
//
// function handleError(error) {
//   var errorMessage = error.message;
//   alert(errorMessage);
// }
//
// function redirectToTasks(userId) {
//   window.location = "app.html?id=" + userId;
// }

$(document).ready(function() {
<<<<<<< HEAD
  $(".sign-up-button").click(function(e){
    e.preventDefault();
    var email = $(".sign-email").val();
    var password = $(".sign-password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        var userId = response.user.uid;
        redirectToTasks(userId);
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    })
    $(".sign-in-button").click(function(e){
      e.preventDefault();
      var email = $(".sign-email").val();
      var password = $(".sign-password").val();

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(response) {
          var userId = response.user.uid;
          redirectToTasks(userId);
      })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
      })
  })

  function redirectToTasks(userId) {
    window.location = "tasks.html?id=" + userId;
  }
=======
  $(".sign-up-button").click(signUpClick);
  $(".sign-in-button").click(signInClick);
});

function signUpClick(event) {
  event.preventDefault();

  var email = $(".sign-email").val();
  var password = $(".sign-password").val();

  createUser(email, password);
}

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(response) {
     alert("Cadastro concluido com sucesso !!!\n " + email)
    })
    .catch(function(error) {
      handleError(error);
    });
}

function signInClick(event) {
  event.preventDefault();

  var email = $(".sign-email").val();
  var password = $(".sign-password").val();

  signInUser(email, password);
}

function signInUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response) {
      var userId = response.user.uid;
      redirectToTasks(userId);
    })
    .catch(function(error) {
      handleError(error)
    });
}

function handleError(error) {
  var errorMessage = error.message;
  alert(errorMessage);
}

function redirectToTasks(userId) {
  window.location = "app.html?id=" + userId;
}
>>>>>>> 9af0809fdcc1548045375e680e4c964c11d3ba7a
