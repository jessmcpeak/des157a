(function(){
    `use strict`;
    console.log(`running js`);

    for(let option of document.querySelectorAll(`.bird-select`)){
        option.addEventListener(`click`, function(event){
            event.preventDefault();

            option.setAttribute(`class`, `bird-select selected`);
        });
    }

    document.querySelector(`#choose-species`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#select`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#game`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar timer-animation`);
    });

    document.querySelector(`#timer-progress`).addEventListener(`animationend`, function(event){
        event.preventDefault();

        document.querySelector(`#game`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#lose`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar`);
    });

    document.querySelector(`#try-again`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#lose`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#game`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar timer-animation`);
    });

    document.querySelector(`#dance`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#dance`).style.width = `${document.querySelector(`#dance`).style.width + 10}px`;
    });
})();