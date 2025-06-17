// Toggle details section
  document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.brand-card');
      const detailsSection = card.querySelector('.details-section');
      const isActive = detailsSection.classList.contains('active');

      // Close any open details sections
      document.querySelectorAll('.details-section.active').forEach(section => {
        section.classList.remove('active');
        section.closest('.brand-card').querySelector('.details-btn').classList.remove('active');
        section.closest('.brand-card').querySelector('.details-btn').textContent = 'Explore Details';
      });

      // Toggle current section if it wasn't already active
      if (!isActive) {
        detailsSection.classList.add('active');
        button.classList.add('active');
        button.textContent = 'Hide Details';
      }
    });
  });