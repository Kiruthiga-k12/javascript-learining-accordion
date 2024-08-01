const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {

    button.classList.toggle('active');
    
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});