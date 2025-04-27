const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

const child = document.getElementById("child");
const child2 = document.getElementById("child2");

outer.addEventListener("click", () => {
  alert("Outer clicked!");
}, true); // true for capturing phase

inner.addEventListener("click", () => {
    alert("Inner clicked!");
  }, true); // true for capturing phase

child.addEventListener("click", (event) => {
  alert("Child clicked!");
   
}, true); // true for capturing phase

child2.addEventListener("click", (event) => {
    alert("Child2 clicked!");
}, true); // true for capturing phase
