

var imagesPath = ["img/image01.jpg", "img/image02.jpg", "img/image03.jpg", "img/image04.jpg"];

var images = document.querySelector('.images');

var slideIndex = 1;


function repeat() {

  clear(images);

  createImages();

  addMargin();  

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


// var changeArr = function () {
 
//   var a = imagesPath[0];

//   for (i = 0; i < imagesPath.length - 1; i++) {
//     imagesPath[i] = imagesPath[i + 1];
//   }

//   imagesPath[imagesPath.length - 1] = a;

//   return imagesPath
// }


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

  var borders = document.getElementsByClassName('highlight');
 
  if (slideIndex > imagesPath.length) {
    slideIndex = 1
  } 
   
  for (i = 0; i < borders.length; i++) {
    borders[i].className = borders[i].className.replace(" active", "");
  }

  borders[slideIndex - 1].className += " active";

  slideIndex++;
}


function addMargin() {
  var slide = document.querySelector('.images');
  slide.classList.add('moveMargin');
}


function removeMargin() {
  var slide = document.querySelector('.images');
  slide.classList.remove('moveMargin');
}


setTimeout(removeMargin, 1000);
setInterval(removeMargin, 16000);

createImages();

addThumbnails();

addBorder();

setInterval(repeat, 4000);





