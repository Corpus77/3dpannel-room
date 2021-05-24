import {filenames} from '/filenames.js';
const weblogic = {
    image: "textures/woodgreybrown",
    
    winChoice:function(){
        return document.querySelector(".winChoice")},


    createFileChoice: function () {
        let winChoice = document.createElement('div');
        winChoice.className = "winChoice";
        for (let i=0; i<105; i++) {
            let item_container = document.createElement('div');
            item_container.className = 'example_container';
            item_container.innerHTML = 
            "<img class = 'item' alt = 'none'><p></p>";
            let image = item_container.querySelector('img');
            image.setAttribute('src', `textures/${filenames[i]}`);
            let item_paragr = item_container.querySelector('p');
            item_paragr.className = 'item_paragr';
            item_paragr.innerText = `${filenames[i]}`;
            winChoice.append(item_container);
        }

        document.body.append(winChoice);
    },

    choiceAppear: function (winchoice) {
        winchoice.classList.toggle("choiceAppear");
       },

       applyTexture: function (e, example, winChoice) {
        if (e.target.parentNode.classList.contains(example)) {
            let chosen = e.target.parentNode.querySelector('p').innerText;
            weblogic.image = `url(textures/${chosen})`;
           weblogic.choiceAppear(winChoice);
            console.log(weblogic.image);
        }
    }
    

}
export {weblogic};
