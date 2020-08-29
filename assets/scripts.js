const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.login-cmp-box');
const loginButton = document.querySelector('.login-button');



loginButton.addEventListener('click',function() {
    modal.classList.add('open');
    backdrop.classList.add('open');
})