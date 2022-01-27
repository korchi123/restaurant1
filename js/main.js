(function() {
    const section2 = document.querySelector('.section2');
    window.onscroll = () => {
        if (window.pageYOffset>50) {
            section2.classList.add('.nav_menu_active');
        } else {section2.classList.remove('.nav_menu_acctive');
        }
    };
}());


(function( ) {
    const  burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav_menu');
    const menuCloseItem = document.querySelector('.nav_close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_menu_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_menu_active')
    });
}());