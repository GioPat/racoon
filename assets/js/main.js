function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    // var txt = entry.target.id + " visibility: " + entry.isIntersecting;

    if (entry.isIntersecting) {
      entry.target.classList.remove("fade");
    } else {
      entry.target.classList.add("fade");
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

let observer = new IntersectionObserver(callbackFunc, options);

section_elements = Array.from(document.getElementById("section-div").getElementsByTagName("div"));

section_elements.forEach(element => {
  observer.observe(element);
})
