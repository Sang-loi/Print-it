const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlides = 0;

let banner = document.querySelector("#banner .banner-img");

let bannerText = document.querySelector("#banner p");


/* interactions right/left arrow */

const rightArrow = document.querySelector("#banner .arrow_right");

const leftArrow = document.querySelector("#banner .arrow_left");


rightArrow.addEventListener("click", function(){
	currentSlides++;
  if (currentSlides >= slides.length) {
    currentSlides = 0;
  }
  banner.src = slides[currentSlides].image;
  bannerText.innerHTML = slides[currentSlides].tagLine;
  updateBulletPoints();
});

leftArrow.addEventListener("click", function(){
	currentSlides--;
	if (currentSlides < 0) {
    	currentSlides = slides.length - 1;
  	}
  banner.src = slides[currentSlides].image;
  bannerText.innerHTML = slides[currentSlides].tagLine;
  updateBulletPoints();
});

/* bullet points slider */


for (let i=0 ; i < slides.length ; i++ ){
	let bulletPoint = document.createElement('div');
	document.querySelector("#banner .dots").appendChild(bulletPoint);
	bulletPoint.classList.add("dot");
	updateBulletPoints();
}

/* Activation dot_selected */

function updateBulletPoints() {
	const bulletPoints = document.querySelectorAll("#banner .dots .dot");
	for (let i = 0; i < bulletPoints.length; i++) {
	  if (i === currentSlides) {
		bulletPoints[i].classList.add("dot_selected");
	  } else {
		bulletPoints[i].classList.remove("dot_selected");
	  }
	}
}