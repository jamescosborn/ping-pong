  // Business logic
var pingPong = function(numbers) {
  var userArray = [];
  for (var index = 1; index <= numbers; index += 1) {
    // alert(index);
     if (index % 15 === 0) {
     userArray.push("pingPong")
   } else if (index % 11 === 0) {
     userArray.push("Match!")
   } else if (index % 5 === 0) {
     userArray.push("pong")
   } else if (index % 3 === 0) {
     userArray.push("ping")
   } else if (index % 50 === 0) {
     userArray.push("Champion")
   } else if (index % 100 === 0) {
     userArray.push("Legendary")
   } else {
     userArray.push(index);
     console.log(userArray);
   }
  } return userArray;
};

  // UI Logic

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#playerNumber").val());
    var result = pingPong(userInput);
    result.forEach(function(rally) {
    $("#result").append("<li>" + result + "</li>");
    });

  });
});
