
import {weblogic} from "/custom_file_choice.js";

window.onload = function () {
    
    weblogic.createFileChoice();

    let win_choice_button = document.querySelector('#win_choice_button');
    let winChoice = document.querySelector(".winChoice");
    let item_container = document.querySelector('.example_container');
    let wall = document.querySelector('.wall');
    let pannelSize = wall.offsetHeight/4;
    let inputFile = document.querySelector('.inputFile');
    let fileAll = document.querySelector('#fileAll');
    let clear = document.querySelector('.clear');
    let image = "textures/woodgreybrown";

    //Choice of files
    
    winChoice.onclick = applyTexture;    
    
    

    win_choice_button.onclick = choiceAppear ;
    

    

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
   
    
    fileAll.onclick = () => {
        choiceAppear();
        console.log('image from fileAll ' + image);
        
            winChoice.addEventListener('click', fileAllHandler );
            setTimeout (() => {
                winChoice.removeEventListener('click', fileAllHandler );
                },2000);

            winChoice.onscroll = () => winChoice.addEventListener('click', fileAllHandler );   
        
        }
    
    inputFile.onclick = choiceAppear;
        
    
    

    wall.onclick = (e) => {
        if (e.target.classList.contains('pannel')) {
            e.target.style.backgroundImage = image;
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
   function choiceAppear () {
    winChoice.classList.toggle("choiceAppear");
   }

   function applyTexture (e) {
    if (e.target.parentNode.classList.contains('example_container')) {
        let chosen = e.target.parentNode.querySelector('p').innerText;
        image = `url(textures/${chosen})`;
        choiceAppear();
        console.log(image);
    }
}
   function fileAllHandler () {
    console.log('click from fileAllHandler');
    pannelList.forEach((item) => {
    item.style.backgroundImage = `${image}`;
                    })
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