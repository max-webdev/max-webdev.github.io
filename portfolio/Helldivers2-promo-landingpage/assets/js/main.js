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

function animateOnScroll() {
  dataAOS.forEach(function(animate) {
  const { scrollY: y, innerHeight: h } = window;
  if (y > animate.offsetTop - h / 1.2) animate.classList.add('animate');
})
}

window.addEventListener('scroll', animateOnScroll);

// navBar button

const navBar = document.querySelector('.nav-bar');
navBar.addEventListener('click', () => {
  navBar.classList.toggle('nav-bar__active');
});