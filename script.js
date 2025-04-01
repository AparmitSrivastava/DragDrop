console.log("learning drag and drop functionality")
console.log("start");

let left = document.getElementById("leftbox")
let right = document.getElementById("rightbox")
let lists = document.getElementsByClassName("list")
let cont = document.getElementById("container")

cont.style.backgroundColor="#2235"
document.body.style.padding=0
document.body.style.margin=0
document.body.style.maxHeight="100vh"

let selected = null;

for(let list of lists){
    list.addEventListener("dragstart",(e)=>{
         selected = e.target;
    })

    right.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    right.addEventListener("drop",(e)=>{
       if(selected){
        right.appendChild(selected)
        selected=null
       }
    })

    left.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    left.addEventListener("drop",(e)=>{
       if(selected){
        left.appendChild(selected)
        selected=null
       }
    })
}