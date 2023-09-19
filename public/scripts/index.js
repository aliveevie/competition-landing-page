document.addEventListener('DOMContentLoaded', function () {
    
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const nav = document.querySelector('.header-m');

    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });


    
});