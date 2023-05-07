const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelector('.nav-link');
const navTop = document.querySelector('.nav-top');
const imageShow = document.querySelector('.image-show');
const caption = document.getElementById('caption');
const footerIcons = document.querySelectorAll('.footer-icon');
const footerImg = document.querySelectorAll('.footer-img');
const body = document.getElementById('body');
let currentIndex = 0;


navBtn.addEventListener(('click'),function () {
  navLink.classList.add('showMenu');
  navTop.style.visibility = 'hidden';
  body.setAttribute('style','overflow:hidden;');
});
closeBtn.addEventListener(('click'),function () {
  navLink.classList.remove('showMenu');
  navTop.removeAttribute('style');
  body.removeAttribute('style');
});

let timer = '';
let index = 0;
let time = 1500;

footerIcons.forEach((img)=>{
  img.addEventListener('click',function (e) {
    removeActive();
    index = Array.from(footerIcons).indexOf(img);
    img.classList.add('active');
    imageShow.src = img.getAttribute('src');
    caption.innerText = img.getAttribute('alt').toUpperCase();
  });
});
slideShows();

function removeActive() {

  footerIcons.forEach(img => {
    img.classList.remove('active');
  });
}

function slideShows(){
  timer = setInterval(function () {
    footerIcons[index].classList.remove('active');
    index++;
    if (index === footerIcons.length) {
      index = 0;
    }
    imageShow.src = footerIcons[index].getAttribute('src');
    footerIcons[index].classList.add('active');
  },time);
}



let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();