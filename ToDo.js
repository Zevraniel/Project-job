const input =document.querySelector("#box")
const list = document.querySelector("#list")

const task= ()=>{
    // pokud nezadáš hodnotu, napíše alert
    if(input.value===" "){
        alert("Musíš něco napsat.")
    }else{
        // vytvoří proměnné li a span a vytvoří v něm stejnojmenné proměnné
        let li =document.createElement("li")
        li.innerHTML = input.value // do obsahu li uloží hodnotu inputu
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7" //přidá křížek u úkolu.
        li.appendChild(span)
    }
    input.value = " "
    save()
}

list.addEventListener("click",function(event){
    //pokud je vybraná položka li přepne ji na "check"
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("check")
        // pokud byl vybrán span /tlačítko X ,vymaže prvek seznamu
    }else if (event.target.tagName==="SPAN"){
        event.target.parentElement.remove()
    }
    
},false)
//uložení a načtení dat do a z local storage
const save = ()=>{
    localStorage.setItem("data",list.innerHTML)
}

const show =()=>{
    list.innerHTML=localStorage.getItem("data")
}
show()