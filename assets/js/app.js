const navBtn = document.querySelector('.nav-btn');
const navCloseBtn = document.querySelector('.close-btn');
const navLink = document.querySelector('.nav-link');
const skillImg = document.querySelector('.skill-img');
const skillCaption = document.querySelector('.skill-caption-text');
const cardImg = document.querySelectorAll('.card-img > img');

let index = 0;
let time = 2000;

navBtn.addEventListener('click',function () {
  navLink.classList.add('showMenu');
});
navCloseBtn.addEventListener('click',function () {
  navLink.classList.remove('showMenu');
});
window.addEventListener('scroll',function(){
  if(window.pageYOffset > 0){
    navBtn.childNodes[1].classList.add('nav-btn-bg');
  }else{
    navBtn.childNodes[1].classList.remove('nav-btn-bg');
  }
});

cardImg.forEach( img => {
  img.addEventListener('click',function () {
    removeActive();
    index = Array.from(cardImg).indexOf(img);
    img.classList.add('active');
    skillImg.src = img.getAttribute('src');
    skillCaption.textContent = img.getAttribute('alt');
  })
});

function removeActive() {
  cardImg.forEach( img => {
      img.classList.remove('active');
  });
}
setInterval(slideShow,time);


function slideShow() {
    index++;
    // cardImg[index].classList.remove('active');
    removeActive();

    if(index === cardImg.length){
      index = 0;
    }
    cardImg[index].classList.add('active');
    skillImg.src = cardImg[index].getAttribute('src');
    skillCaption.textContent = cardImg[index].getAttribute('alt');

}
