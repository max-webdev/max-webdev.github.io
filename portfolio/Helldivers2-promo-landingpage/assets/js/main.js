const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Tabs
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  event.currentTarget.setAttribute('aria-selected', true);
  const id = event.currentTarget.id;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

// Animate on scroll

const dataAOS = document.querySelectorAll('[data-aos="animate"]');
const nav = document.querySelector('.nav');
const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');
const navItem = navList.querySelectorAll('.nav-item');

function animateOnScroll() {
  dataAOS.forEach(function (animate) {
    const { scrollY: y, innerHeight: h } = window;
    if (y > animate.offsetTop - h / 1.2) animate.classList.add('animate');
    if (y > 200) {
      nav.classList.add('nav-fixed');
    } else {
      nav.classList.remove('nav-fixed');
    }
  })
}

window.addEventListener('scroll', animateOnScroll);

// navBar button

navBar.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  navBar.classList.toggle('nav-bar__active');
});

navList.addEventListener('click', () => {
  nav.classList.remove('nav__active');
  navBar.classList.toggle('nav-bar__active');
})