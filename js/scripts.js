$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutInput = $("input#shout").val().toUpperCase();
    

    $(".shout").text(shoutInput);

    $("#shoutText").show();

    event.preventDefault();
  });
});