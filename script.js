function showDetails(id) {
    const details = document.querySelectorAll('.details');
    details.forEach(d => d.classList.add('hidden'));
  
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove('hidden');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  