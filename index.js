
import {weblogic} from "/custom_file_choice.js";

window.onload = function () {
    
   weblogic.createFileChoice("textures", ".container");

   
    let winChoice = weblogic.winChoice(); 
    let item_container = document.querySelector('.example_container');
    let wall = document.querySelector('.wall');
    let pannelSize = wall.offsetHeight/4;
    let inputFile = document.querySelector('.inputFile');
    let fileAll = document.querySelector('#fileAll');
    let clear = document.querySelector('.clear');
   

    //Choice of files
    
    winChoice.onclick = (e) => {
        weblogic.applyTexture(e, 'example_container', winChoice ) };     
    
    
    for (let i = 0; i<40; i++){
        addPannel()
    };
    
    let pannelList = document.querySelectorAll('.pannel');
    pannelList.forEach((item) => {
        item.oncontextmenu = (e) => {
            e.preventDefault()
            e.target.classList.toggle('rotate');
        }
    });
   
    
    fileAll.onclick = (e) => {
       weblogic.choiceAppear(winChoice);
        //console.log('weblogic.image from fileAll ' + weblogic.image);
        console.log("weblogic.winChoice  "+weblogic.winChoice().classList);
        winChoice.addEventListener('click', fileAllHandler );
        
        
}
    
    inputFile.onclick = (e) => { weblogic.choiceAppear(winChoice)};
        
    
    

    wall.onclick = (e) => {
        if (e.target.classList.contains('pannel')) {
            e.target.style.backgroundImage = weblogic.image;
        }
        
    }

   wall.ondblclick = (e) => {
    e.target.style.backgroundImage = 'none';
    }

   clear.onclick = (e) => {
    let pannelList = document.querySelectorAll('.pannel');
        pannelList.forEach((item) => {
            item.style.backgroundImage = 'none';
        })
   }

 // Functions





   function fileAllHandler (e) {

   let stickAll = new Promise(function(resolve, reject) {
    if (e.target.parentNode.classList.contains('example_container')) {
        console.log('click from fileAllHandler');
        pannelList.forEach((item) => {
        item.style.backgroundImage = `${weblogic.image}`;
                        })
    }
    else {
        winChoice.removeEventListener('click', fileAllHandler );
    }
   }).then ( winChoice.removeEventListener('click', fileAllHandler ))

    
   
   }

   function addPannel() {
    let pannel = document.createElement('div');
    pannel.style.width = pannelSize +'px';
    pannel.style.height = pannelSize + 'px';
    pannel.classList.add('pannel', 'rotate');
    pannel.classList.toggle('rotate');
    wall.append(pannel);
    }



}