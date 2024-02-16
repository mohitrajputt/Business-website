// TO open/close Authentication form 
const userAuth = document.getElementById('user-auth');
const authForm = document.getElementsByClassName('auth-form')[0];
const closeAuth = document.getElementById('close-Auth');

userAuth.addEventListener('click', function() {
    authForm.style.width = "35vw";
    document.body.style.overflow = "hidden";
});

closeAuth.addEventListener('click', function() {
    authForm.style.width = "0";
    document.body.style.overflow = "auto";
});