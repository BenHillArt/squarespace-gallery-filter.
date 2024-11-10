document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const galleryItems = document.querySelectorAll('#gallery a');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'inline-block'; // Show matching items
        } else {
          item.style.display = 'none'; // Hide non-matching items
        }
      });
    });
  });
});
