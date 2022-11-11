// Menu functions

const scrn = document.body;
const btn = document.querySelector("#navPaneToggle");
const menu = document.querySelector("#navPane");

btn.addEventListener("click", () => {
    scrn.classList.toggle('overflow-hidden');
    menu.classList.toggle("hidden");
});

menu.addEventListener("click", () => {
    scrn.classList.remove('overflow-hidden');
    menu.classList.add('hidden');
});