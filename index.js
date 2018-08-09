$(document).ready(function() {
  $(".sign-up-button").click(function(e){
    e.preventDefault();
    var email = $(".sign-up-email").val();
    var password = $(".sign-up-password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(){
        window.location = "app.html";
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    })
    $(".sign-in-button").click(function(e){
      e.preventDefault();
      var email = $(".sign-in-email").val();
      var password = $(".sign-in-password").val();

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
      })
  })
