const motoboyImg = document.querySelector('#motoboyImg');

window.addEventListener('load', function () {
  motoboyImg.classList.add('right-[70px]');
  motoboyImg.classList.remove('opacity-0');
});

function handleMenuClick(e) {
  let menu = document.querySelector('ul');

  if (e.name === 'menu') {
    e.name = 'close';
    menu.classList.add('top-[100px]');
    menu.classList.add('opacity-100');
  } else {
    e.name = 'menu';
    menu.classList.remove('top-[80px]');
    menu.classList.remove('opacity-100');
  }
}

function closeMenu() {
  let menu = document.querySelector('ul');
  menu.classList.remove('top-[80px]');
  menu.classList.remove('opacity-100');
  document.querySelector('#menu').name = 'menu';
}
