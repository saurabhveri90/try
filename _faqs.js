document.addEventListener('DOMContentLoaded', function() {
  const accordionContainers = document.querySelectorAll('.accordion-container');
  const accordionContents = document.querySelectorAll('.accordion-content');
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  const arrows = document.querySelectorAll('.arrow');

  accordionContainers.forEach(container => {
    if (container.classList.contains('open-all')) {
      accordionContents.forEach(content => {
        content.style.display = 'block';
        content.classList.add('open');
      });
      arrows.forEach(arrow => arrow.classList.add('open'));
    }
  });

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = header.nextElementSibling; 
      const arrow = header.querySelector('.arrow'); 

      if (accordionContainers[0].classList.contains('open-all')) {
        
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
        
        arrow.classList.toggle('open');
      } else {
        if (content.style.display === 'none' || content.style.display === '') {
          
          accordionContents.forEach(c => {
            c.style.display = 'none';
            c.classList.remove('open');
          });
          arrows.forEach(a => a.classList.remove('open'));
        }
       
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
        content.classList.toggle('open');
        arrow.classList.toggle('open');
      }
    });
  });
});
