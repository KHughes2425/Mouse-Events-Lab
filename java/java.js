const div = document.querySelector("#myDiv");

div.style.backgroundcolor = "grey";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("click", e=> {
    console.log("You clicked the mouse!");
})