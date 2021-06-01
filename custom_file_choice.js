import {filenames} from '/filenames1.js';
const weblogic = {
    image: undefined,
    winChoice:function(){
        return document.querySelector(".winChoice")},


    createFileChoice: function (textures, container) {
        let winChoice = document.createElement('div');
        winChoice.className = "winChoice";
        for (let i=0; i<filenames.length; i++) {
            let item_container = document.createElement('div');
            item_container.className = 'example_container';
            item_container.innerHTML = 
            "<img class = 'item' alt = 'none'><p></p>";
            let image = item_container.querySelector('img');
            let item_paragr = item_container.querySelector('p');
            item_paragr.className = 'item_paragr';


            for (let keyFilename in filenames[i]){
                image.setAttribute('src', `${textures}/${keyFilename}`);
                item_paragr.innerText = `${keyFilename}`;
            }


            


            winChoice.append(item_container);
        }
        let webcontainer = document.querySelector(container);
        webcontainer.append(winChoice);
    },

    choiceAppear: function (winchoice) {
        winchoice.classList.toggle('choiceAppear');
       },

       applyTexture: function (e, example, winChoice, textures) {
        if (e.target.parentNode.classList.contains(example)) {
            let chosen = e.target.parentNode.querySelector('p').innerText;
            weblogic.image = `url(${textures}/${chosen})`;
            //console.log(e.target.parentNode.lastChild.innerHTML);
            //------------------------------------------------
            for (let filenameObj of filenames) {
                for (let name in filenameObj) {
                    if (name == e.target.parentNode.lastChild.innerHTML ) {
                        //console.log('found');
                        if (filenameObj[name] == 77) {
                            
                            
                        }
                        else {

                            
                        }
                    }
                    //filenameObj[name] == 77) 
                        
                    
                }
            }

            weblogic.choiceAppear(winChoice);
            
        }
    }
    

}
export {weblogic};
