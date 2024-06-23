$(document).ready(function () {
  $(".color-box").hide();

  $("#fadeInBtn").click(function () {
    $("#div1").fadeIn(2000);
    $("#div2").fadeIn(4000);
    $("#div3").fadeIn(6000);
  });

  $("#fadeOutBtn").click(function () {
    $("#div1").fadeOut(2000);
    $("#div2").fadeOut(4000);
    $("#div3").fadeOut(6000);
  });

  $("#fadeToggleBtn").click(function () {
    $("#div1").fadeToggle(2000);
    $("#div2").fadeToggle(4000);
    $("#div3").fadeToggle(6000);
  });
});
