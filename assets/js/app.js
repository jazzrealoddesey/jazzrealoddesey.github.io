const navBtn = document.querySelector('.nav-btn button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const portfolioDesc = document.querySelector('.portfolio-desc');
const skillImages = document.querySelectorAll('.skill img');
const skillDescImage = document.querySelector('.skill-desc img');
const skillDescSpan = document.querySelector('.skill-desc span');
let skillImageIndex = 0;

navBtn.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});
portfolioDesc.addEventListener('click', function () {
  // alert('hello');
});

skillImages.forEach(skillImage => {
  skillImage.addEventListener('click',function (e) {
    blurImage();
    
    skillDescImage.src = e.target.src;
    skillDescSpan.textContent = e.target.alt;
    e.target.classList.add('active');
    skillImageIndex = Array.from(skillImages).indexOf(e.target);
  });
});


function showPic() {
  skillImages.forEach(skillimage => {
      blurImage();
      skillDescImage.src = skillImages[skillImageIndex].src;
      skillDescSpan.textContent = skillImages[skillImageIndex].alt;
      skillImages[skillImageIndex].classList.add('active');
  });
}
  setInterval(function () {
    skillImageIndex++;
    if(skillImageIndex == 6){
      skillImageIndex = 0;
    }
    showPic();
  },2000);
  
function blurImage() {
  skillImages.forEach(skillimage =>{
      skillimage.classList.remove('active');
  });
}