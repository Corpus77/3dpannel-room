
import {weblogic} from "/custom_file_choice.js";

window.onload = function () {
    
    weblogic.createFileChoice("textures", ".container");

   
    let winChoice = weblogic.winChoice(); 
    let wall = document.querySelector('.wall');
    let pannelSize = wall.offsetHeight/4-0.2;
    let inputFile = document.querySelector('.inputFile');
    let fileAll = document.querySelector('#fileAll');
    let clear = document.querySelector('.clear');
   
   
   
    
    //Choice of files
    
    winChoice.onclick = (e) => {
        weblogic.applyTexture(e, 'example_container', winChoice, "textures" ) };     
    
    
    for (let i = 0; i<150; i++){
        addPannel()
    };
    
    let pannelList = document.querySelectorAll('.pannel');
    pannelList.forEach((item) => {
        contextMenu();
    });
   
    
    fileAll.onclick = (e) => {
       weblogic.choiceAppear(winChoice);
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

// onresize - recalculating
    window.onresize = (e) => {
        
        let remove = new Promise (function(resolve, reject) {
            removePannel();
            console.log('promise');
        }).
        then (
            whenRemoved()
        ).
        then (contextMenu())
           
    }

 // Functions
  
    function contextMenu() { 
        let pannelList = document.querySelectorAll('.pannel');
        pannelList.forEach((item) => {
            item.oncontextmenu = (e) => {
                e.preventDefault()
                e.target.classList.toggle('rotate');
            }
        });
    }

   function fileAllHandler (e) {

   let stickAll = new Promise(function(resolve, reject) {
    if (e.target.parentNode.classList.contains('example_container')) {
        let pannelList = document.querySelectorAll('.pannel');
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

    function removePannel() {
        let pannelList = document.querySelectorAll('.pannel');
        for (let i=0; i<pannelList.length;i++) {
            wall.removeChild(pannelList[i]);
        }

    }

    function whenRemoved(){
        pannelSize = wall.offsetHeight/4-0.2;
        for (let i = 0; i<150; i++){
            addPannel()
        };
        let pannelList = document.querySelectorAll('.pannel');
        pannelList.forEach((item) => {
            item.style.backgroundImage = `${weblogic.image}`;
                            })
        }


}

