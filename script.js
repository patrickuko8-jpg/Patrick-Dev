
// Smooth navigation when clicking menu links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        console.log('Navigation:', this.textContent);
    });
});

// Welcome message in browser console
console.log("Welcome to Patrick's Developer Portfolio!");
