const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const back2LoginLink = document.querySelector('.back2login-link');
const registerLink = document.querySelector('.register-link');
const forgotPasswordLink = document.querySelector('.forgotPassword-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginButton = document.getElementById('LoginBtn');
const checkbox = document.getElementById('check');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

forgotPasswordLink.addEventListener('click', ()=> {
    wrapper.classList.add('active2');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
back2LoginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active2');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

loginButton.addEventListener('click', () => {
  if (checkbox.checked) {
    checkbox.checked = false;
  }
});
