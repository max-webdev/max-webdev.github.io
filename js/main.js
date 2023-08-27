function screensaverOff() {
    let screensaver = document.getElementById('screensaver');
    let screen = document.getElementById('screen');
    let website = document.getElementById('website');
    screen.classList.add('screenClick');
    function websiteOn() {
        website.classList.remove('display-none');
        screensaver.style.display = ('none');
    };
    setTimeout(websiteOn, 2000);
}