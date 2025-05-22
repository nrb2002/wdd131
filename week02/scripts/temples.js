const hamButton = document.getElementById('hambMenu');
const ul = document.querySelector('ul');

hamButton.addEventListener('click', () => {
	ul.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Handle responsive display
// function updateNavDisplay() {
//   if (window.innerWidth > 512) {
//     ul.classList.add('flex-display');
//     ul.classList.remove('open');
//     hamButton.classList.remove('open');
//   } else {
//     ul.classList.remove('flex-display');
//   }
// }

// // Run on page load
// updateNavDisplay();

// // Run on resize
// window.addEventListener('resize', updateNavDisplay);

window.addEventListener('resize', () =>{
	if (window.innerWidth > 512) {
    ul.classList.add('flex-display');
    ul.classList.remove('open');
    hamButton.classList.remove('open');
  } else {
    ul.classList.remove('flex-display');
  }
});