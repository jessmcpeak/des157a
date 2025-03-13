(function(){
    `use strict`;
    console.log(`running js`);

    let loveProgress = 5;

    for (const option of document.querySelectorAll(`.bird-select`)) {
        option.addEventListener(`click`, function(event){
            option.setAttribute(`class`, `bird-select selected`);
        });
    }

    document.querySelector(`#choose-species`).addEventListener(`click`, function(event){
        loveProgress = 5;
        document.querySelector(`#love-progress`).style.width = `calc(${loveProgress}% + 4px)`;
        document.querySelector(`#select`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#game`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar timer-animation`);
    });

    document.querySelector(`#timer-progress`).addEventListener(`animationend`, function(event){
        document.querySelector(`#game`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#lose`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar`);
    });

    document.querySelector(`#try-again`).addEventListener(`click`, function(event){
        loveProgress = 5;
        document.querySelector(`#love-progress`).style.width = `calc(${loveProgress}% + 4px)`;
        document.querySelector(`#lose`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#game`).setAttribute(`class`, `screen`);
        document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar timer-animation`);
    });

    document.querySelector(`#dance`).addEventListener(`click`, function(event){
        if (loveProgress === 95) {
            document.querySelector(`#love-progress`).addEventListener(`transitionend`, function(event){
                document.querySelector(`#game`).setAttribute(`class`, `screen hidden`);
                document.querySelector(`#win`).setAttribute(`class`, `screen`);
                document.querySelector(`#timer-progress`).setAttribute(`class`, `progress-bar`);
            });
            loveProgress += 5;
            document.querySelector(`#love-progress`).style.width = `calc(${loveProgress}% + 4px)`;
        } else if (loveProgress < 95) {
            loveProgress += 5;
            document.querySelector(`#love-progress`).style.width = `calc(${loveProgress}% + 4px)`;
        }
    });

    document.querySelector(`#learn-more`).addEventListener(`click`, function(event){
        document.querySelector(`#win`).setAttribute(`class`, `screen hidden`);
        document.querySelector(`#info`).setAttribute(`class`, `screen`);
    });

    for (const button of document.querySelectorAll(`.choose-another-bird`)) {
        button.addEventListener(`click`, function(event){
            location.reload();
        });
    }
})();