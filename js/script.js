$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

function infoPopup() {
  document.getElementById("bottomText").style.display = "none";
  document.getElementById("infoText").style.display = "block";
  document.getElementById("titlemid").innerHTML = "100portraits";
  document.getElementById("titlemid").style.fontSize = "11.5vw";
}

function infoBack() {
  document.getElementById("bottomText").style.display = "block";
  document.getElementById("infoText").style.display = "none";
  document.getElementById("titlemid").innerHTML = "Vancouver <br>Intl.";
  document.getElementById("titlemid").style.fontSize = "17.0vw";

}