const togglePassword = document.querySelector("#togglepassword");
const password = document.querySelector("#iconpassword");

togglePassword.addEventListener('click', function(){
    const type = password.getAttribute('type') === 'password'?'text':'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});