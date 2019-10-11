

var imagesPath = ["img/image01.jpg", "img/image02.jpg", "img/image03.jpg", "img/image04.jpg"];

var images = document.querySelector('.images');

var borders = document.getElementsByClassName('highlight');

var slideIndex = 1;


function repeat() {

  clear(images);

  createImages();  
  
  changeArr();

  addBorder(); 

}


function createImages() {
   
  for (i = 0; i < imagesPath.length; i++) {
   
    var pictures = document.querySelector('.images');
    var picture = document.createElement('img');

    picture.setAttribute('src', imagesPath[i]);

    pictures.appendChild(picture);
  };
}     


var changeArr = function () {
 
  var a = imagesPath[0];

  for (i = 0; i < imagesPath.length - 1; i++) {
    imagesPath[i] = imagesPath[i + 1];
  }

  imagesPath[imagesPath.length - 1] = a;

  return imagesPath
}


function clear(everything) {
  everything.innerHTML = "";
}


function addThumbnails() {

  for (var j = 0; j < imagesPath.length; j++) {

    var thumbs = document.querySelector('.thumbnail');
    var thumb = document.createElement('img');


    thumb.setAttribute('src', imagesPath[j]);

    thumb.classList.add('highlight');

    thumbs.appendChild(thumb);
  }
}


function addBorder() {
 
  if (slideIndex > imagesPath.length) {
    slideIndex = 1
  } 
   
  for (i = 0; i < borders.length; i++) {
    borders[i].className = borders[i].className.replace(" active", "");
  }

  borders[slideIndex - 1].className += " active";

  slideIndex++;
}


createImages(); 

addThumbnails();

borders[0].classList.add('active');

setInterval(repeat, 1000);





