// Insersection

const options = { 
    threshold: 0,
};
const sections = document.querySelectorAll('#BookTable');
const button = document.querySelector('#staticContainer');

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            button.classList.add('hidden');
        } else {
            button.classList.remove('hidden');
        }
    },
    options);
});

sections.forEach(section => observer.observe(section));