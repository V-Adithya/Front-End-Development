$(document).ready(() => {
  $("button.btn1").click(() => {
    $("div.one").fadeIn(2000);
    $("div.two").fadeIn(2000);
    $("div.three").fadeIn(2000);
    console.log("working");
  });
  $("button.btn2").click(() => {
    $("div.one").fadeOut(2000);
    $("div.two").fadeOut(2000);
    $("div.three").fadeOut(2000);
    console.log("working");
  });
  $("button.btn3").click(() => {
    $("div.one").fadeToggle(2000);
    $("div.two").fadeToggle(2000);
    $("div.three").fadeToggle(2000);
    console.log("working");
  });
});
