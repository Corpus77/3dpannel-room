import {weblogic} from "/custom_file_choice.js";
weblogic.createFileChoice("../textures", "body");
let winChoice = weblogic.winChoice();
let wall = document.querySelector('.wall');
let inWall = document.querySelector('#inwall');
let clearAll = document.querySelector(".clearAll");
let allwall = document.querySelector('#allwall');
let allwallList = document.getElementsByClassName('brick');
window.onload = () => {
    brickAdopts();
}

window.onresize = (e) => {
    
    brickAdopts();
}

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

inWall.onclick = (e) => {
    weblogic.choiceAppear(winChoice);
    
    }

 //Choice of files
    
 winChoice.onclick = (e) => {
    weblogic.applyTexture(e, 'example_container', winChoice, "../textures" ) };      


let brickList = document.querySelectorAll(".brick") ;
wall.onclick = paint;
wall.addEventListener ('dblclick', clear);
clearAll.onclick = (e) => {
   brickList.forEach((item) => {
       item.style.backgroundImage = "none";
   }) 
}

allwall.onclick = (e) => {
    weblogic.choiceAppear(winChoice);
    if (weblogic.image) {
        for (let i=0;i<allwallList.length;i++){
            allwallList.item(i).style.backgroundImage = weblogic.image;
        }
    }
    
    // brickList.forEach((brick) => {
    //     brick.style.backgroundImage = weblogic.image;
    // });
    console.log('allwall');
}
// Functions

function clear(event) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = 
        `none`;
        
    }
}
function paint (event) {
if (weblogic.image) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = weblogic.image;
        
    }
    
        }
            }

function brickAdopts() {
    // to fix for big screen
    if (wall.parentNode.offsetWidth < 555) {
        let brickList = document.querySelectorAll('.brick');
        brickList.forEach((item) => {
            item.classList.add('brickResize');
        })
    } else {
        let brickList = document.querySelectorAll('.brick');
        brickList.forEach((item) => {
            item.classList.remove('brickResize');
        })
        console.log('remove size')
    }
}