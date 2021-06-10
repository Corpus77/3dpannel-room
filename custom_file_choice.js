import {filenames} from './filenames1.js';
const weblogic = {
    image: undefined,
    chosen: undefined,
    heightFlag: null,
    winChoice:function(){
        return document.querySelector(".winChoice")},


    createFileChoice: function (textures, container) {
        let winChoice = document.createElement('div');
        winChoice.className = "winChoice";
        
        for (let i=0; i<filenames.length; i++) {
            
            let objKeys = Object.keys(filenames[i]);
            
            let item_container = document.createElement('div');
            item_container.className = 'example_container';
            item_container.innerHTML = 
            "<img class = 'item' alt = 'none'><p></p><span></span>";
            let image = item_container.querySelector('img');
            let item_paragr = item_container.querySelector('p');
            item_paragr.className = 'item_paragr';

            image.setAttribute('src', `${textures}/${objKeys[0]}`);
            item_paragr.innerText = `${filenames[i][objKeys[1]]}`;
            //-------------------------------------------
            if (filenames[i][objKeys[0]] == 77) {
                let size = item_container.querySelector('span');
                size.textContent = '700x770mm'; 
                
            } else {
                let size = item_container.querySelector('span');
                size.textContent = '700x700mm'; 
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
            
            for (let imageObj of filenames){
                let imageObjKeys = Object.keys(imageObj);
                
                if (e.target.parentNode.querySelector('p').innerText ==
                imageObj['title']) {
                    this.chosen = imageObjKeys[0];
                    console.log(this.chosen);
                }
                
            }
            //let chosen = e.target.parentNode.querySelector('p').innerText;
            this.image = `url(${textures}/${this.chosen})`;
            
            this.choiceAppear(winChoice);
            
        }
    }
    

}
//-----------------------------------------
export {weblogic};
