const hamburgerButton = document.querySelector('.hamburger-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const body = document.body;
const menuLinks = dropdownMenu.querySelectorAll('a');



hamburgerButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
  hamburgerButton.classList.toggle('menu-open');
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = dropdownMenu.contains(event.target);
  const isClickOnHamburger = hamburgerButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && dropdownMenu.classList.contains('active')) {
    dropdownMenu.classList.remove('active');
    hamburgerButton.classList.remove('menu-open');
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
    hamburgerButton.classList.remove('menu-open');
  });
});

// SCHEDULE JS //

const scheduleDays = document.querySelectorAll('.schedule-day');

scheduleDays.forEach(day => {
  const titles = day.querySelectorAll('.day-title');

  titles.forEach(title => {
    const arrowIcon = title.querySelector('.arrow-icon');
    const dropdownContent = title.nextElementSibling;

    title.addEventListener('click', () => {
      const isOpen = dropdownContent.classList.contains('active');

      day.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('active');
        content.previousElementSibling.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        dropdownContent.classList.add('active');
        arrowIcon.style.transform = 'rotate(180deg)';
      } else {
        dropdownContent.classList.remove('active');
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });

    dropdownContent.addEventListener('click', () => {
      dropdownContent.classList.remove('active');
      arrowIcon.style.transform = 'rotate(0deg)';
    });
  });
});

// INFO/ABOUT //

const infoSections = document.querySelectorAll('.info-text');

infoSections.forEach(section => {
  const title = section.querySelector('.dropdown-title');
  const arrowIcon = title.querySelector('.arrow-icon');
  const content = section.querySelector('.dropdown-content');

  title.addEventListener('click', () => {
    const isOpen = section.classList.toggle('open');

    content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : '0';

    arrowIcon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});
