

var imagesPath = ["image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg"];

var images = document.querySelector('.images');

var slideIndex = 1;


function repeat() {

  clear(images);

  createImages();

  marginMove();  
 
  addBorder(); 
}


function createImages() {
   
  for (i = 0; i < imagesPath.length; i++) {
   
    var pictures = document.querySelector('.images');
    var picture = document.createElement('img');

    picture.setAttribute('src', "img/" + imagesPath[i]);

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


    thumb.setAttribute('src', "img/" + imagesPath[j]);

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


function marginMove() {

  var slide = document.querySelector('.images');
  slide.classList.add('moveMargin');
}


function removeMargin() {
  var slide = document.querySelector('.images');
  slide.classList.remove('moveMargin');
}

setTimeout(removeMargin, 1);
setInterval(removeMargin, 15986);

createImages();

addThumbnails();

addBorder();

setInterval(repeat, 4000);






