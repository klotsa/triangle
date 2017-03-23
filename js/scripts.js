$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    debugger;
    var first = parseFloat($("input#firstside").val());
    var second = parseFloat($("input#secondside").val());
    var third = parseFloat($("input#thirdside").val());

    if (age <= 40 && gender === "female") {
        $(".Tom").show();
    } else if (age > 40 && gender === "female") {
        $(".Pacino").show();
    } else if ((age <= 40) && (gender === "male")) {
        $(".Rachel").show();
    } else if (age > 40 && gender === "male") {
        $(".Brigitte").show();
    } else {
        $(".Yoda").show();
    }
    event.preventDefault();

  });
});
