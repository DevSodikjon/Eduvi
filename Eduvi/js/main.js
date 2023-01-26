
const My_account = document.querySelector('.My_account');
const modalWind = document.querySelector('.modal');
const burger = document.querySelector('.header_items_burger_menu');
const cart_anchor = document.querySelector('.cart_anchor');
const modal_nav = document.querySelector('.modal_nav');
const remove_btn = document.querySelector('.remove');
const modal_cart = document.querySelector('.modalCart');

function modalWindow() {
    if(modalWind.classList.contains('active') ? modalWind.classList.remove('active'):modalWind.classList.add('active'))
    ;
}

My_account.addEventListener("click", modalWindow);

function burgerToggle() {
    if (modal_nav.classList.contains(!"active_modal_nav") ? modal_nav.classList.add('.active_modal_nav'):modal_nav.classList.remove('active_modal_nav'));
}

function removeBurger() {
    if (modal_nav.classList.contains("active_modal_nav") ? modal_nav.classList.remove('.active_modal_nav'):modal_nav.classList.add('active_modal_nav'));
}

burger.addEventListener("click", burgerToggle);
remove_btn.addEventListener("click", removeBurger);


function modalCART() {
    console.log("I am working");
    if(modal_cart.classList.contains('modal_cart_active') ? modal_cart.classList.remove('modal_cart_active'):modal_cart.classList.add('modal_cart_active'))
    ;

}

cart_anchor.addEventListener("click", modalCART);

