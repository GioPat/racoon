var sliders = Array.from(document.getElementsByClassName("slideshow-container"));
var sliderCounters = new Object();
sliders.forEach(slider => {
  sliderCounters[slider.id] = 0
  showSlides(slider.id);
})


function plusSlides(step, sliderId, imgCount) {
  sliderCounters[sliderId] = (sliderCounters[sliderId] + step < 0) ? imgCount - 1 : (sliderCounters[sliderId] + step) % imgCount;
  showSlides(sliderId);
}

function currentSlide(sliderId) {
  showSlides(sliderId);
}

function showSlides(sliderId) {
  var i;
  var slideIndex = sliderCounters[sliderId];
  var slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
  var dots = document.getElementById(sliderId).getElementsByClassName("dot");
/*   if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  console.error(slideIndex); */
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
}