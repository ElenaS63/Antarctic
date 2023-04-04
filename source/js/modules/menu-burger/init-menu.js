const menuButton = document.querySelector('[data-menu-button]');
const menuClosers = document.querySelectorAll('[data-menu-close]');
const menuParent = document.querySelector('[data-menu]');

const openMenu = () => {
  menuParent.classList.add('open');
  document.body.classList.add('scroll-lock');
};

const closeMenu = () => {
  menuParent.classList.remove('open');
  document.body.classList.remove('scroll-lock');
};

const onMenu = () => {
  if (menuParent.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

window.addEventListener('resize', () => {
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= 768) {
    if (menuParent.classList.contains('open')) {
      menuParent.classList.remove('open');
      document.body.classList.remove('scroll-lock');
    }
  }
});

const initMenu = () => {
  menuButton.addEventListener('click', onMenu);
  menuClosers.forEach((closer) => closer.addEventListener('click', closeMenu));
};

export {initMenu};
