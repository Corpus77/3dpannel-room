//import {filenames} from '/filenames1.js';
import { weblogic } from "./custom_file_choice.js";

let globalLogic = (path, numWalls) => {
  function main() {
    weblogic.createFileChoice("textures", ".container", path);

    let winChoice = weblogic.winChoice();
    
    let wallArr = document.querySelectorAll(".wall");
    let wall = wallArr[numWalls];
    //let pannelSize = wall.offsetHeight / 4 - 0.2;
    function pannelSize () {
      return wall.offsetHeight / 4 - 0.2
    }

    let inputFile = document.querySelector(".inputFile");
    let fileAll = document.querySelector("#fileAll");
    let clear = document.querySelector(".clear");

    //Choice of files

    winChoice.onclick = (e) => {
      weblogic.applyTexture(
        e,
        "example_container",
        winChoice,
        path,
        "textures"
      );
    };

    for (let i = 0; i < 150; i++) {
      addPannel();
    }

    let pannelList = document.querySelectorAll(".pannel");
    pannelList.forEach((item) => {
      contextMenu();
    });

    fileAll.onclick = (e) => {
      weblogic.choiceAppear(winChoice);
      winChoice.addEventListener("click", fileAllHandler);
      //---------------------
    };

    inputFile.onclick = (e) => {
      weblogic.choiceAppear(winChoice);
    };

    wall.onclick = (e) => {
      if (e.target.classList.contains("pannel")) {
        e.target.style.backgroundImage = weblogic.image;
      }
    };

    wall.ondblclick = (e) => {
      e.target.style.backgroundImage = "none";
    };

    clear.onclick = (e) => {
      let pannelList = document.querySelectorAll(".pannel");
      pannelList.forEach((item) => {
        item.style.backgroundImage = "none";
      });
    };

    // onresize - recalculating
    window.onresize = (e) => {
      let resize = new Promise(function (resolve, reject) {
        resized();
      }).then(contextMenu());
    };

    // Functions

    function contextMenu() {
      let pannelList = document.querySelectorAll(".pannel");
      pannelList.forEach((item) => {
        item.oncontextmenu = (e) => {
          e.preventDefault();
          e.target.classList.toggle("rotate");
        };
      });
    }

    function fileAllHandler(e) {
      let stickAll = new Promise(function (resolve, reject) {
        if (e.target.parentNode.classList.contains("example_container")) {
          let pannelList = document.querySelectorAll(".pannel");
          pannelList.forEach((item) => {
            item.style.backgroundImage = weblogic.image;
          });
        } else {
          winChoice.removeEventListener("click", fileAllHandler);
        }
      }).then(winChoice.removeEventListener("click", fileAllHandler));
    }

    function addPannel() {
      let pannel = document.createElement("div");
      pannel.style.width = pannelSize() + "px";
      pannel.style.height = pannelSize() + "px";
      pannel.classList.add("pannel", "rotate");
      pannel.classList.toggle("rotate");
      wall.append(pannel);
    }
    // TODO: we have 2 walls resize problem in two walls
    function resized() {
      //pannelSize = wall.offsetHeight / 4 - 0.2;
      //pannelSize();
      for (let i = 0; i < 150; i++) {
        pannelList[i].style.width = pannelSize() + "px";
        pannelList[i].style.height = pannelSize() + "px";
      }
    }
    
  }
  main();
};

globalLogic("", 0);
export { globalLogic };
