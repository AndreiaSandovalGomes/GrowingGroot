$(document).ready(function() {
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
