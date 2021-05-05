window.onload = function () {
    let wall = document.querySelector('.wall');
    let pannelSize = wall.offsetHeight/4;
    let inputFile = document.querySelector('.inputFile');
    let fileAll = document.querySelector('#fileAll');
    let clear = document.querySelector('.clear');
    let image;

    function addPannel() {
        let pannel = document.createElement('div');
        pannel.style.width = pannelSize +'px';
        pannel.style.height = pannelSize + 'px';
        pannel.classList.add('pannel', 'rotate');
        pannel.classList.toggle('rotate');
        wall.append(pannel);
    }

    for (let i = 0; i<40; i++){
        addPannel()
    };
    
    let pannelList = document.querySelectorAll('.pannel');
    pannelList.forEach((item) => {
        item.oncontextmenu = (e) => {
            e.preventDefault()
            e.target.classList.toggle('rotate');
        }
    })
    fileAll.oninput = (e) => {
        pannelList.forEach((item) => {
            item.style.backgroundImage = `url(textures/${fileAll.files[0].name})`
        })
    }
    inputFile.oninput = (e) => {
        image = `url(textures/${inputFile.files[0].name})`;
        }

    

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






}