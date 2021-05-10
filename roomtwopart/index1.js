let inWall = document.querySelector('#inwall');
let inPanel = document.querySelector('#inpanel');
let infloor = document.querySelector('#infloor');
let floor = document.querySelector('.floor');
let block_1 = document.querySelector('.block_1');
let block_2 = document.querySelector('.block_2');
let orient = document.querySelector('.orientation');
let contWall = document.querySelector('.container-wall');
let proportion = document.querySelector('.proportion');
let teeth = document.querySelector(".teeth");
let teethBlock = document.querySelector('.teeth_block');
let teethFlag = false;


// fullfill teethblock
for (let t=1;t<34;t++) {
    let teethBrick = document.createElement('div');
    teethBrick.classList.add("teeth_brick");
    teethBlock.append(teethBrick);

}
let bricks = document.querySelectorAll('.teeth_brick');


// Calculating sticker size adoptively_1
let stickerSize_1 = block_1.offsetHeight/3.5 -1;
let stickerList_1 = document.querySelectorAll('.sticker_1');
stickerList_1.forEach((item)=>{
    item.style.width = stickerSize_1 + 'px';
    item.style.height = stickerSize_1 + 'px';
    
})
// // Calculating sticker size adoptively_2

// let stickerSize_2 = block_2.offsetHeight/3.5 - 1;
// let stickerList_2 = document.querySelectorAll('.sticker_2');
// stickerList_2.forEach((item)=>{
//     item.style.width = stickerSize_2 + 'px';
//     item.style.height = stickerSize_2 + 'px';
    
// })

// Calculating floorEl size adoptively
let floorSize = floor.offsetHeight/10 -1;
let floorSizeWidth = floor.offsetWidth/13;

    
// adopts background stickers
block_1.style.backgroundSize = stickerSize_1 + "px";
block_2.style.backgroundSize = stickerSize_1 + "px";    
 // adopts background floor elements  
floor.style.backgroundSize = floorSizeWidth + 'px' + " " +
floorSize + "px";

inWall.oninput = (e)=>{
    
    block_1.style.backgroundImage = `url(../textures/${inWall.files[0].name})`;
   // block_1.style.backgroundImage = `url(../textures/${inWall.files[0].name})`;
    stickerList_1.forEach((item)=>{
        item.style.backgroundImage = `url(../textures/${inWall.files[0].name})`;
    })
}
inPanel.oninput = (e)=>{
    
    block_2.style.backgroundImage = `url(../textures/${inPanel.files[0].name})`;
    // stickerList_2.forEach((item)=>{
    //     item.style.backgroundImage = `url(textures/${inPanel.files[0].name})`;
    // })
}
infloor.oninput = (e)=>{
    floor.style.backgroundImage = `url(../textures/floor/${infloor.files[0].name})`;
    floorList = document.querySelectorAll('.floor_el');
    floorList.forEach((item) => {
        item.style.backgroundImage = `url(../textures/floor/${infloor.files[0].name})`;
        
    })
       
}
orient.onclick = (e) => {
 if (teethFlag) {
    teethBlock.classList.toggle('disp_teeth');
 }    
 if (contWall.classList.contains('horizontal')) {
    //teethBlock.classList.toggle('disp_teeth');
     block_1.style.height = 100 + '%';
     block_2.style.height = 100 + '%';
     block_1.style.flexDirection = "row-reverse";
    
 }
 else {
    //teethBlock.classList.toggle('disp_teeth');
    block_1.style.width = 100 + '%'; 
    block_2.style.width = 100 + '%';
    block_1.style.flexDirection = "row";
 }
 contWall.classList.toggle('horizontal');
 block_1.classList.toggle('bl_orient');
 block_2.classList.toggle('bl_orient');
 
}
proportion.oninput = (e) => {
    
    if (contWall.classList.contains('horizontal')) {
        block_1.style.height = +proportion.value + '%';
        block_2.style.height = 100 -((+proportion.value)) + '%';
        
        
        }
    else {
        
        block_1.style.width = +proportion.value + '%';
        block_2.style.width = 100 -((+proportion.value)) + '%';
        
} 
    }

// block teeth
teeth.onclick = (e) => {
   
    // coloring
    if (!contWall.classList.contains('horizontal')){
        teethFlag = !teethFlag;
        teethBlock.classList.toggle('disp_teeth');
        let imageTeeth1 = window.getComputedStyle(block_1).backgroundImage;
        let imageTeeth2 = window.getComputedStyle(block_2).backgroundImage;

        bricks.forEach((item,index)=>{
            if (index%2 == 0) {
                item.style.background = imageTeeth2;
            }
            else {
                item.style.background = imageTeeth1;   
            }
            
        });
        
    }
    
}
    


    
