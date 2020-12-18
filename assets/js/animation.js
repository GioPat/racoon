function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    var txt = entry.target.id + " visibility: " + entry.isIntersecting;
    console.warn(txt);
  // document.getElementById('log').appendChild(document.createTextNode(txt));
  // document.getElementById('log').appendChild(document.createElement("br"));
  });
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};
let observer = new IntersectionObserver(callbackFunc, options);

export function observeBlocksForAnimation(css_ids) {
  css_ids.forEach(id => {
    observer.observe(document.getElementById(id));
  });
}
