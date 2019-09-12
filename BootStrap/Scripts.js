var header = document.getElementById("qwerty");
var navBtns = document.getElementsByClassName("nav-item");
var sticky = header.offsetTop;

$(window).scroll(function() {
  console.log(sticky);
  //console.log(window.pageYOffset);
  if (window.pageYOffset > sticky) {
    $("#qwerty").addClass("sticky");
    console.log("added");
  } else {
    $("#qwerty").removeClass("sticky");
  }
})