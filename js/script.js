// Business logic
function pingPong(input) {
  var userArray = []
  for (var index = 0; index < input.length; index++) {
    for (var j = 0; )
  }
}


// UI Logic

$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
    event.preventDefault();
    var input = $("input#userInput").val();
    var result = wordPuzzle(input);
    $("#result").text(result);
    $("#result").show();
  });
});
