document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    openBtn.addEventListener('click', function () {
      mobileNav.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      mobileNav.style.display = 'none';
    });
  });