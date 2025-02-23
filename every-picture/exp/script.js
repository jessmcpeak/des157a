(function(){
    `use strict`;
    console.log(`running js`);

    // const diy = document.querySelector(`#diy`);
    // const grad = document.querySelector(`#grad`);
    // const renfaire = document.querySelector(`#renfaire`);
    // const scraps = document.querySelector(`#scraps`);
    // const short = document.querySelector(`#short`);
    // const sweater = document.querySelector(`#sweater`);

    const images = document.querySelectorAll(`img`);
    const pictures = document.querySelectorAll(`div`);
    let zIndexCounter = 1;

    for(img of images){
        img.setAttribute(`draggable`, `false`);
    }

    for(pic of pictures){
        pic.setAttribute(`draggable`, `true`);

        pic.addEventListener(`drag`, function(event){
            event.target.style.zIndex = `${zIndexCounter}`;
            event.target.style.top = `${event.clientY}px`;
            event.target.style.left = `${event.clientX}px`;
        });

        pic.addEventListener(`dragend`, function(event){
            zIndexCounter++;
            event.target.style.top = `${event.clientY}px`;
            event.target.style.left = `${event.clientX}px`;
        });
    }
})();