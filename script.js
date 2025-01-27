const header = document.querySelector('.header');
const burgerMenu = document.getElementById('burger-menu');
const headerMenuList = document.querySelector('.header-menu-list');
const footerMenuList = document.querySelector('.footer-menu-list');

function syncMenuSelection(target) {
  const targetHref = target.getAttribute('href');
  if (targetHref) {
    document
      .querySelectorAll('.is-current')
      .forEach(link => link.classList.remove('is-current'));

    document
      .querySelectorAll(`a[href="${targetHref}"]`)
      .forEach(link => link.classList.add('is-current'));
  }
}

if (burgerMenu && headerMenuList) {
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenuList.classList.toggle('active');
  });
}

[headerMenuList, footerMenuList].forEach(menu => {
  if (menu) {
    menu.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link) {
        syncMenuSelection(link);

        if (window.innerWidth <= 760) {
          burgerMenu.classList.remove('active');
          headerMenuList.classList.remove('active');
        }
      }
    });
  }
});

document.addEventListener('click', event => {
  const isClickInsideMenu =
    headerMenuList.contains(event.target) || burgerMenu.contains(event.target);
  if (!isClickInsideMenu && window.innerWidth <= 760) {
    burgerMenu.classList.remove('active');
    headerMenuList.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  header.classList.toggle('header-expanded', window.scrollY > 0);
});

// form
document
  .querySelector('.form-button')
  .addEventListener('click', function (event) {
    const form = document.querySelector('.contact-form');
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const privacy = form.querySelector('input[type="checkbox"]');

    if (!name.value || !email.value || !privacy.checked) {
      alert(
        'Please fill out all fields and accept the privacy policy before submitting!'
      );
      return;
    }

    if (!name.checkValidity() || !email.checkValidity()) {
      alert('Please make sure all fields are filled correctly!');
    }

    alert('Form is correctly filled out and sent!');
  });
