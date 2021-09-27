
var slideIndex = 1;

function plusSlides(n) {
  console.log("inside plusSlides with a value of" + n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  console.log(n);
  showSlides(slideIndex = n);
}


function showSlides(n) {
  //console.log("inside showSlides with a value of" + n);

  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");


//resets it end node
  if (n < 1) {
    slideIndex = slides.length;
  }


  if (n > slides.length) {
    slideIndex = 1;
  }

  //hides the slides
  for (i = 0 ; i < slides.length; i++){
  slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function generateDots() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        var dotNumber = i + 1;
        var dot = document.createElement('span');
        dot.innerHTML =
            '<button class="js-dot" onclick="goToDiv(' + dotNumber + ')">' + dotNumber + '</button>';

        document.getElementById('js-slider-dots').appendChild(dot);

    }
}
generateDots();

showSlides(slideIndex);
