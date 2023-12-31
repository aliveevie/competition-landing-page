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

// Set the date we're counting down to
var countDownDate = new Date("Sept 26, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
    document.getElementById('days').innerHTML = `<p>${days.toString().padStart(2, '0')}<span class="time" >D</span></p>`
    document.getElementById('hours').innerHTML = `<p>${hours.toString().padStart(2, '0')}<span class="time">H</span></p>`
    document.getElementById('minutes').innerHTML = `<p>${minutes.toString().padStart(2, '0')}<span class="time">M</span></p>`
    document.getElementById('seconds').innerHTML = `<p>${seconds.toString().padStart(2, '0')}<span class="time">S</span></p>`
  
  
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("exipred").innerHTML = "EXPIRED";
    document.getElementById('times').style.display = 'none'
  }

}, 1000);



});

/*
                <p id="hours">00 <span class="time">H</span></p>
                <p id="minutes">00 <span class="time">M</span></p>
                <p id="seconds">00 <span class="time">S</span></p>
*/

// Number of stars you want to generate


// Set the target countdown time (in seconds)

