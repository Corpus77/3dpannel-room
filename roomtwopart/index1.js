import {weblogic} from "/custom_file_choice.js";
weblogic.createFileChoice("../textures", "body");
let winChoice = weblogic.winChoice();


let inWall = document.querySelector('#inwall');
let inPanel = document.querySelector('#inpanel');
let block_1 = document.querySelector('.block_1');
let block_2 = document.querySelector('.block_2');
let orient = document.querySelector('.orientation');
let contWall = document.querySelector('.container-wall');
let proportion = document.querySelector('.proportion');
let teeth = document.querySelector(".teeth");
let teethBlock = document.querySelector('.teeth_block');
let teethFlag = false;

let aim = null;


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




    
// adopts background stickers
block_1.style.backgroundSize = stickerSize_1 + "px";
block_2.style.backgroundSize = stickerSize_1 + "px";    
 





winChoice.onclick =
(e) => {
    weblogic.applyTexture(e, 'example_container', winChoice, "../textures" );
    switch (aim){
    case 'bl_1': 
    if ( weblogic.image){
        block_1.style.backgroundImage = weblogic.image;
    }; break;
    case 'bl_2':
        if ( weblogic.image){
            block_2.style.backgroundImage = weblogic.image;
        }; break;

   }
}
inWall.onclick = (e)=>{
    weblogic.choiceAppear(winChoice);
    aim = "bl_1";
    
}
inPanel.onclick = (e)=>{
    weblogic.choiceAppear(winChoice);
    aim = "bl_2";
    //block_2.style.backgroundImage = weblogic.image;
    
}

orient.onclick = (e) => {
 if (teethFlag) {
    teethBlock.classList.toggle('disp_teeth');
 }    
 if (contWall.classList.contains('horizontal')) {
    
     block_1.style.height = 100 + '%';
     block_2.style.height = 100 + '%';
     block_1.style.flexDirection = "row-reverse";
    
 }
 else {
    
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
    


    
