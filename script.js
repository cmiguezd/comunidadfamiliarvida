window.addEventListener('load', function () {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 860) {
            menu.classList.remove('open');
        }
    });
});