const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

const child = document.getElementById("child");
const child2 = document.getElementById("child2");

outer.addEventListener("click", () => {
  alert("Outer clicked!");
});

inner.addEventListener("click", () => {
    alert("Inner clicked!");
  });

child.addEventListener("click", (event) => {
  alert("Child clicked!");
  //event.stopPropagation(); // Prevents the event from bubbling up to the parent
});

child2.addEventListener("click", (event) => {
    alert("Child2 clicked!");
    event.stopPropagation(); // Prevents the event from bubbling up to the parent
},);
