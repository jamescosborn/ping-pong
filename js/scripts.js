// Business logic
function pingPong(input) {
  var userArray = [];
  for (var index = 0; index < input; index++) {
    userArray.push(index);
    var userArray = input;
  }
  return input;
};


// UI Logic

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = pingPong(input);
    $("#result").text(result);
  });
});
