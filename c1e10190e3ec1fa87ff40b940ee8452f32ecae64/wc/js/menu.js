// Menu functions
document.getElementById('navPaneToggle').onclick = function() {
    document.body.classList.toggle('overflow-hidden');
    document.getElementById('navPane').classList.toggle('hidden');
    document.getElementById('staticContainer').classList.toggle('z-40');
}
document.getElementById('navPane').addEventListener('click', (event) => {
    document.body.classList.remove('overflow-hidden');
    document.getElementById('navPane').classList.add('hidden');
});