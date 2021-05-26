import {weblogic} from "/custom_file_choice.js";
weblogic.createFileChoice("../textures", ".container");
let winChoice = weblogic.winChoice();
let wall = document.querySelector('.wall');
let inWall = document.querySelector('#inwall');
let clearAll = document.querySelector(".clearAll");


console.log(winChoice);
//add bricks to the wall
for (let i = 0;i<400;i++) {
    let brick = document.createElement('div');
    brick.className = 'brick';
    wall.appendChild(brick);
    
}
//move parity rows
let row = 0;
for (let i = 0; i<400;i++) {
    if (i%32 == 0) {
        for (let row = 0; row<16; row++){
            wall.children[i+row].style.left = 3 + '%';
            
        }
    }
}
//?????????????????
inWall.onclick = (e) => {
    weblogic.choiceAppear(winChoice);
   // winChoice.classList.remove('winChoice');
    console.log(winChoice);
    }

let brickList = document.querySelectorAll(".brick") ;
wall.addEventListener ('click', paint);
wall.addEventListener ('dblclick', clear);
clearAll.onclick = (e) => {
   brickList.forEach((item) => {
       item.style.backgroundImage = "none";
   }) 
}
function clear(event) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = 
        `none`;
        
    }
}
function paint (event) {
if (inWall.files[0].name) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = 
        `url(../textures/${inWall.files[0].name})`;
    }
    
}
    
    
}

