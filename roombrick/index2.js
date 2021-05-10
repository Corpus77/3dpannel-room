let brick = document.createElement('div');
brick.className = 'brick';
let wall = document.querySelector('.wall');
let inWall = document.querySelector('#inwall');

//add bricks to the wall
for (let i = 0;i<400;i++) {
    let brick = document.createElement('div');
    brick.className = 'brick';
    wall.appendChild(brick);
    // console.log(i);
}
//move parity rows
let row = 0;
for (let i = 0; i<400;i++) {
    if (i%32 == 0) {
        for (let row = 0; row<16; row++){
            wall.children[i+row].style.left = 3 + '%';
            // console.log(i);
        }
    }
} 
wall.addEventListener ('click', paint);
wall.addEventListener ('dblclick', clear);
function clear(event) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = 
        `none`;
        console.log('clear')
    }
}
function paint (event) {
if (inWall.files[0].name) {
    if (event.target.classList.contains('brick')) {
        event.target.style.backgroundImage = 
        `url(../textures/${inWall.files[0].name})`;
    }
    console.log(inWall.files[0].name)
}
    
    
}

