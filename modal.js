// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Outside modal click close
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

//Function to close modal with outside click
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
}
 }