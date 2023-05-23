const colorRange = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]

const color =document.getElementById("color")
const btn =document.getElementById("btn")


function changeColor(){
    colorCode="#"
    for(i=0;i<6;i++){
        colorCode+=colorRange[getRandom()]
    }
    color.textContent= colorCode
    document.body.style.background=colorCode
}

function getRandom(){
   return Math.floor(Math.random()*colorRange.length)
}

