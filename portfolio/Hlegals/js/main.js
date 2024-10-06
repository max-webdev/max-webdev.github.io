let navBox = document.querySelector('#navBox');
let navClose = document.querySelector('#navClose');
let navOpen = document.querySelector('#navOpen');

navOpen.addEventListener('click', function () {
    navBox.classList.add('nav-box-xs');
})

navClose.addEventListener('click', function () {
    navBox.classList.remove('nav-box-xs');
})