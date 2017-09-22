  // Business logic
function pingPong(input) {
    var userArray = [];
    var newArray = [];
    for (var index = 0; index < input; index++) {
      userArray.push(index);
    } if (index % 3 === 0) {
          index = input.replace(ping, "ping")
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
