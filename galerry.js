"use strict"
// vybere classu slides a vypíše do testově konzole.
const slides = document.querySelectorAll(".slide")
// console.log(slides);

// všechny slides se pomocí cyklu oneslide přidá listener na click
slides.forEach(function(oneslide){
  oneslide.addEventListener("click",function(event){
    // ˇodstraní předcházející aktivní class a na tu,na kterou bylo kliknuto ,ho to přidá
    deleteActiveClass()
    oneslide.classList.add("active")
  })
})
//  funkce popsaná výše
function deleteActiveClass(){
  slides.forEach(function(myslide){
    myslide.classList.remove("active")
  })
}