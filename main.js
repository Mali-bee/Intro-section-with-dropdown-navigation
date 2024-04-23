const mobile_menu_btn = document.querySelector('.hamburger');
const mobile_show_menu = document.querySelector('.mobile-menu');

mobile_menu_btn.addEventListener('click', function() {
    mobile_menu_btn.classList.toggle('is-active');
    mobile_show_menu.classList.toggle('is-active');
});