$(document).ready(function() {
  $("form#triangleSidesLength").submit(function(event) {

    var l1 = parseFloat($("input#firstside").val());
    var l2 = parseFloat($("input#secondside").val());
    var l3 = parseFloat($("input#thirdside").val());
    // debugger;
    if ( l1 + l2 <= l3 ||  l2 + l3 <=l1 || l3 + l1 <= l2 ) {
      // alert("if 1 work");
        $("#notTriangle").show();
    } else if ( l1 === l2 && l2 === l1 && l3 === l1 ){
      // alert("if 2 work");
        $("#equilateral").show();
    } else if (l1 != l2 && l2 != l3) {
      // alert("if 3 work");
        $("#scalene").show();
    } else {
        $("#isosceles").show();
    }
    event.preventDefault();
  });
});
