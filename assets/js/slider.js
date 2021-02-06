var sliders = Array.from(document.getElementsByClassName("slideshow-container"));
console.log(sliders);
var sliderCounters = new Object();
sliders.forEach(slider => {
  sliderCounters[slider.id] = 1
  showSlides(1, slider.id);
})


function plusSlides(step, sliderId) {
  sliderCounters[sliderId] += step;
  

function currentSlide(sliderId) {
  showSlides(sliderId);
}

function showSlides(sliderId) {
  var i;
  var slideIndex = sliderCounters[sliderId];
  var slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
  var dots = document.getElementById(sliderId).getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  console.error(slideIndex);
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}