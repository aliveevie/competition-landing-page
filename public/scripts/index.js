document.addEventListener('DOMContentLoaded', function () {
    
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const nav = document.querySelector('.header-m');

    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });


const qaElements = document.querySelectorAll('.qa');

qaElements.forEach(function(qaElement) {
    const answerElement = qaElement.querySelector('.ans');
    const iconElement = qaElement.querySelector('.answer');

    qaElement.addEventListener('click', function() {
        if (answerElement.style.display === 'block') {
            answerElement.style.display = 'none';
            iconElement.classList.remove('fa-minus');
            iconElement.classList.add('fa-plus');
        } else {
            answerElement.style.display = 'block';
            iconElement.classList.remove('fa-plus');
            iconElement.classList.add('fa-minus');
        }
    });
});



});


// Number of stars you want to generate


// Set the target countdown time (in seconds)

