// insersection
const options = {
    threshold: 0
};
const sections = document.querySelectorAll('section#BookTable');
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.getElementById('staticContainer').classList.add('hidden');
        } else {
            document.getElementById('staticContainer').classList.remove('hidden');
        }
    },
    options);
});
sections.forEach(section => observer.observe(section));