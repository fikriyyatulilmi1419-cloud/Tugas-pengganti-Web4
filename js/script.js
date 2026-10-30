document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  const mobileMenuLinks = mobileMenu.querySelectorAll('a');


  const closeMenu = () => {

    mobileMenu.classList.remove('opacity-100', 'scale-100');
    mobileMenu.classList.add('opacity-0', 'scale-95');
    

    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300); // 
  };

  menuToggle.addEventListener('click', () => {

    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
  
      mobileMenu.classList.remove('hidden');
      
      requestAnimationFrame(() => {
        mobileMenu.classList.remove('opacity-0', 'scale-95');
        mobileMenu.classList.add('opacity-100', 'scale-100');
      });
    } else {
      closeMenu();
    }
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {

      if (!mobileMenu.classList.contains('hidden')) {
        closeMenu();
      }
    });
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768)
      {
      mobileMenu.classList.add('hidden', 'opacity-0', 'scale-95');
      mobileMenu.classList.remove('opacity-100', 'scale-100');
      }
  });
});
