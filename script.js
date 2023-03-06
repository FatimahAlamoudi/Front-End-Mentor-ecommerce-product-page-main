const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const nav = document.querySelector('.nav');
const body = document.getElementsByTagName("BODY")[0];
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById("overlay");

const notification = document.querySelector('.notification');
const counter = document.querySelector('.counter');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
var count = 0
const images = ['url("./images/image-product-1.jpg")', 'url("./images/image-product-2.jpg")', 'url("./images/image-product-3.jpg")', 'url("./images/image-product-4.jpg")']
const thumbnails = ['url("./images/image-product-1-thumbnail.jpg")', 'url("./images/image-product-2-thumbnail.jpg")', 'url("./images/image-product-3-thumbnail.jpg")', 'url("./images/image-product-4-thumbnail.jpg")'];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const productImage = document.querySelector('.product-img');
const pic = document.querySelector('.pic');
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');
const pic3 = document.querySelector('.pic3');
const pic4 = document.querySelector('.pic4');
const thumbnailsPics = [pic1, pic2, pic3, pic4];
var imageIndex = 0;

const cartBtn = document.querySelector('.cart');
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.content');
const emptyCase = document.querySelector('.empty-case');
const fullCase = document.querySelector('.full-case');
const itemsCount = document.querySelector('.items-count');
const totalPrice = document.querySelector('.total-price');

const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxPic1 = document.querySelector('.lightbox-pic-1');
const lightboxPic2 = document.querySelector('.lightbox-pic-2');
const lightboxPic3 = document.querySelector('.lightbox-pic-3');
const lightboxPic4 = document.querySelector('.lightbox-pic-4');
const lightboxPics = [lightboxPic1, lightboxPic2, lightboxPic3, lightboxPic4];
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

localStorage.setItem("count", 0);
function updateInformation(){
  notification.style.display = 'block';
  notification.innerHTML = localStorage.getItem("count");
  counter.innerHTML = localStorage.getItem("count");
  itemsCount.innerHTML = localStorage.getItem("count");
  totalPrice.innerHTML = ' $' + localStorage.getItem("count") * 125;
}
menu.addEventListener('click', function(){
  nav.style.width = "200px";
  links.style.display = 'block';
  overlay.style.display = "block";
})

closeMenu.addEventListener('click', function() {
  location.reload();
  nav.style.width = '0px';
  body.style.background = 'white';
  overlay.style.display = "none";
})

cartBtn.onclick = function() {
  modal.style.display = "block";
  if (localStorage.getItem("count") == 0){
    emptyCase.style.display = "block";

  }
  else{
    emptyCase.style.display = "none";
    fullCase.style.display = "flex";
    itemsCount.innerHTML = localStorage.getItem("count");
    totalPrice.innerHTML = ' $' + localStorage.getItem("count") * 125;
  }
}

window.onclick = function(event) {
  if (event.target == modal || event.target == lightbox || event.target == overlay) {
    modal.style.display = "none";
    lightbox.style.display = "none";
    nav.style.width = '0px';
    overlay.style.display = "none";
    location.reload();
  }
}
menu.addEventListener('click', function() {
    nav.classList.toggle = 'nav--visible';
    links.classList.toggle = 'hide';
})

counter.innerHTML = count;
plus.addEventListener('click', function () {
    count = parseInt(localStorage.getItem("count")) + 1;
    displayNotification();
    counter.innerHTML = localStorage.getItem("count");
});

minus.addEventListener('click', function () {
    if (parseInt(localStorage.getItem("count")) > 0){
        count = parseInt(localStorage.getItem("count")) - 1;
        displayNotification();
    }
    else{
        count = 0;
        notification.style.display = 'none';
    }

    counter.innerHTML = localStorage.getItem("count");
})


prev.addEventListener('click', function () {
    console.log('prev');
    imageIndex = imageIndex - 1;
    productImage.style.background = images[imageIndex];
    productImage.style.backgroundSize = "cover";

})

next.addEventListener('click', function () {
    console.log('next');
    imageIndex = imageIndex + 1;
    productImage.style.background = images[imageIndex];
    productImage.style.backgroundSize = "cover";

})

function displayNotification(){
    notification.style.display = 'block';
    localStorage.setItem("count", count);
    notification.innerHTML = localStorage.getItem("count");
}

function thumbnailAddStyle(i){
    thumbnailsPics[i].style.border = '1px solid var(--primary-orange)'
    thumbnailsPics[i].style.opacity = '.4';
    productImage.style.background = thumbnails[i];
    productImage.style.backgroundSize = 'cover';
    productImage.style.backgroundPosition = 'center';
    //lightbox
    lightboxPics[i].style.border = '1px solid var(--primary-orange)'
    lightboxPics[i].style.opacity = '.4';
    lightboxImage.style.background = images[i];
    lightboxImage.style.backgroundSize = 'cover';
    lightboxImage.style.backgroundPosition = 'center';
  }

function thumbnailRemoveStyle(){
  for(let i = 0; i< 4; i++){
    thumbnailsPics[i].style.border = 'none';
    thumbnailsPics[i].style.opacity = '1';
    //light box
    lightboxPics[i].style.border = 'none';
    lightboxPics[i].style.opacity = '1';
  }
}

pic1.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(0);
})

pic2.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(1);
})

pic3.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(2);
})

pic4.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(3);
})

lightboxClose.onclick = function() {
    lightbox.style.display = "none";
}
productImage.onclick = function() {
  lightbox.style.display = "block";

}

lightboxPic1.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(0);
})

lightboxPic2.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(1);
})

lightboxPic3.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(2);
})

lightboxPic4.addEventListener('click', function() {
  thumbnailRemoveStyle();
  thumbnailAddStyle(3);
})

lightboxPrev.addEventListener('click', function () {
  console.log('prev');
  imageIndex = imageIndex - 1;
  lightboxImage.style.background = images[imageIndex];

  lightboxImage.style.backgroundSize = "cover";

})

lightboxNext.addEventListener('click', function () {
  console.log('next');
  imageIndex = imageIndex + 1;
  lightboxImage.style.background = images[imageIndex];

  lightboxImage.style.backgroundSize = "cover";

})

