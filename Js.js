const slides = [
	{
		"image":"images/slide-show/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"images/slide-show/slide2 (1).jpg",
		"tagLine":"Tirages haute définition grand format pour vos bureaux et events</span>"
	},
	{
		"image":"images/slide-show/slide3 (1).jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"images/slide-show/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


console.log(slides);
//les variables globales
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left")
let index = 0;
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");

//afficher les dots
function DisplayDots () {
	for (let i = 0 ; i < slides.length -1; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot)
		if ( i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
DisplayDots();
//affichage clique droit
function clickDroit () {
	arrowRight.addEventListener("click", ()=>{
     
	 const arrayDots = document.querySelectorAll(".dots .dot")
	 arrayDots[index].classList.remove("dot_selected");
	index++
	 if(index > slides.length -1){
		index = 0;
	 }
	 arrayDots[index].classList.add("dot_selected")
	 img.src = slides[index].image
	 text.innerHTML = slides[index].tagLine;

	})
}
clickDroit();
//affichage clique gauche 
function clickGauche () {
	arrowLeft.addEventListener("click", ()=>{
     
	 const arrayDots = document.querySelectorAll(".dots .dot")
	 arrayDots[index].classList.remove("dot_selected");
	index--
	 if(index < 0){
		index = slides.length -1;
	 }
	 arrayDots[index].classList.add("dot_selected")
	 img.src = slides[index].image
	 text.textContent = slides[index].tagLine;

	})
}

clickGauche ();