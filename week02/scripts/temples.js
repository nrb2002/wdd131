const hamButton = document.getElementById('hambMenu');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	hamButton.classList.toggle('open');
});