document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const nav = document.querySelector('.nav');

    toggleBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
