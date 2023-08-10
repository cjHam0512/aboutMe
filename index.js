const button = document.getElementById("button1");
const h1 = document.querySelector("section > h1");
const p = document.querySelector("section > p");

button.addEventListener("click", () => {
    button.style.display = "none";
    h1.style.display = "block";
    p.style.display = "block";
})