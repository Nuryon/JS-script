const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


  
    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");
    const dotsContainer = document.querySelector(".dots");
   const ImageSlide = document.querySelector(".banner-img")
   const TextSlider = document.querySelector(".slider-text")
	let dots = [];

   

	for ( let i=0 ; i < slides.length; i ++ ){
		let dot = document.createElement("p");
		dotsContainer.appendChild(dot);
		dot.classList.add('dot');
		dots.push(dot);
	}

	dots[0].classList.add ('dot_selected');

	 arrowLeft.addEventListener("click", () => {
        console.log("Vous avez bien cliqué sur la flèche gauche.");
    });

	arrowRight.addEventListener("click", () => {
        console.log("Vous avez bien cliqué sur la flèche droite.");
    });

