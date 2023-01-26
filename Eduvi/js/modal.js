const My_account = document.querySelector('.My_account');
const modalWind = document.querySelector('.modal');

export function modalWindow() {
    if(modalWind.classList.contains('active')? modalWind.classList.remove('active'):modalWind.classList.add('active'))
    ;

}


My_account.addEventListener("click", modalWindow);