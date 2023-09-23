document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const modalBox = document.querySelector('.modal-box');
    const modalOverlay = document.querySelector('.modal-overlay');
    modalBox.classList.add('active'); // Show the modal box
    modalOverlay.classList.add('active'); // Show the overlay
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body
  });

document.getElementById('closeModalButton').addEventListener('click', function () {
    const modalBox = document.querySelector('.modal-box');
    const modalOverlay = document.querySelector('.modal-overlay');
    modalBox.classList.remove('active'); // Hide the modal box
    modalOverlay.classList.remove('active'); // Hide the overlay
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
  });
  