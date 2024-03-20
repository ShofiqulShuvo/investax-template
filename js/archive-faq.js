document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.faq-tabs-buttons button');
    const tabContents = document.querySelectorAll('.faq-tab-contents .faq');
    const faqTabContents = document.querySelector('.faq-tab-contents');
  
    // Add event listener to each button
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function(event) {
        // Check if the index is within the bounds of tabContents array
        if (index >= 0 && index < tabContents.length) {
          // Remove active class from all buttons and hide all tab contents
          buttons.forEach(function(btn) {
            btn.classList.remove('active');
          });
          tabContents.forEach(function(tab) {
            tab.style.display = 'none';
          });
  
          // Add active class to the clicked button and show the corresponding tab content
          buttons[index].classList.add('active');
          tabContents[index].style.display = 'block';
  
          // Scroll to faq-tab-contents
          faqTabContents.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Initially activate the first tab and button
    if (buttons.length > 0 && tabContents.length > 0) {
      buttons[0].classList.add('active');
      tabContents[0].style.display = 'block';
    }
  });
  