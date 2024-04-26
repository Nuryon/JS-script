const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const ImageSlide = document.querySelector(".banner-img");
const TextSlider = document.querySelector("#banner p");

let index = 0;

const generateBulletPoints = () => {
  dots.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("p");
    if (i === index) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }
    dots.appendChild(dot);
  }
};

generateBulletPoints();
const changeContent = () => {
  ImageSlide.src = "./assets/images/slideshow/" + slides[index].image;
  TextSlider.innerHTML = slides[index].tagLine;
  generateBulletPoints();
};

arrowLeft.addEventListener("click", () => {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  changeContent();
});

arrowRight.addEventListener("click", () => {
  index = index + 1;
  if (index > slides.length - 1) {
    index = 0;
  }

  changeContent();
});
