//https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/
//Shoutout to this tutorial. I got copied the form containers but coded everything else myself.
//CSS could be much cleanier and more organized. Haven't yet made the transitions the tutorial had. Might come back and add them later.

let signupButton = document.querySelector('#signupButton');
let signinButton = document.querySelector('#signinButton')
let signinForm = document.querySelector('#signin');
let signinLogin = document.querySelector('#signinLogin');
let signupForm = document.querySelector("#signup");
let signupLogin = document.querySelector("#signupLogin");

function toggleScreen(){
  signinLogin.style.display = "none";
  signinForm.style.display = "flex";
  signupForm.style.display = "none";
  signupLogin.style.display = "flex";
};

function toggleScreen_2(){
  signinLogin.style.display = "flex";
  signinForm.style.display = "none";
  signupForm.style.display = "flex";
  signupLogin.style.display = "none";
};

signupButton.addEventListener('click', toggleScreen);

signinButton.addEventListener('click', toggleScreen_2);