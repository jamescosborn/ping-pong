  // Business logic
var pingPong = function(playerNumber) {
  var userArray = [];
  for (var index = 1; index <= playerNumber; index += 1) {
    alert(index);
     if (index % 15 === 0) {
     userArray.push("pingPong")
     console.log(userArray)
   } else if (index % 5 === 0) {
     userArray.push("pong")
   } else if (index % 3 === 0) {
     userArray.push("ping")
   } else {
     userArray.push();
   } return userArray;
  }
};

  // UI Logic

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#playerNumber").val());
    var result = pingPong(playerNumber);
    // result.forEach(function(rally) {
    //   $("#result").append("<li>" + rally + "</li>");
    // });

  });
});
