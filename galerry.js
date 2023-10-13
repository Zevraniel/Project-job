"use strict"

const slides = document.querySelectorAll(".slide")
console.log(slides);

slides.forEach(function(oneslide){
  oneslide.addEventListener("click",function(event){
    deleteActiveClass()
    oneslide.classList.add("active")
  })
})

function deleteActiveClass(){
  slides.forEach(function(myslide){
    myslide.classList.remove("active")
  })
}