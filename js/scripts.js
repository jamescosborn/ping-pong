// Business logic
function pingPong(input) {
  var userArray = [];
  for (var index = 0; index < input; index++) {
    userArray.push(index);
    var userArray;
  } for (var ping = 0; ping < input; ping++) {
    if (ping % 3 === 0) {
     userArray = userArray.replace(userArray[ping], "PING!");
  }
};
  return userArray;
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
