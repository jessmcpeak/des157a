(function(){
    `use strict`;
    console.log(`Reading JS`);


    // FORM DATA TO MADLIB


    // DOM reference variables
    const myForm = document.querySelector(`form input[type="submit"]`);
    const madlib = document.querySelector(`#madlib`);
    const formData = document.querySelectorAll(`input[type=text]`);

    // event handler that kicks everything off
    myForm.addEventListener(`click`, function(event){
        event.preventDefault();
        
        console.log(`form submitted`);
        processFormData(formData);

        document.querySelector(`#sitePageResults`).classList.remove(`displayNone`);
    });

    // taking the guts of the programming and putting them into a function - takes the data from the form as an input and extracts the data from it
    function processFormData(formData){
        const words = []; // array that will hold the words from the form - moved into this function to make the function more independent from the rest of the script
        const emptyFields = []; // converted to empty array
        let counter = 0;

        for (const eachWord of formData){ // loop through all the text fields
            if (eachWord.value){
                words.push(eachWord.value); // add all the words to the array
            } else {
                emptyFields.push(counter); // if the field is empty the counter value is pushed to the array
            }
            counter++;
        }

        // if there are any empty fields, showErrors will handle the errors, else make the madlib
        if (emptyFields.length > 0){
            showErrors(formData, emptyFields);
        } else {
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyFields){
        const errorId = formData[emptyFields[0]].id; // gets the id of the first field that is empty
        const errorText = `Please fill out this field: ${errorId}`;
        madlib.innerHTML = errorText; // sets a message to fill in the field
    }

    function makeMadlib(words){
        const myText = `
            <h3>"My Fellow <b>${words[0]}</b>...</h3>

            <p>This nation used to be the <b>${words[1]}</b> nation on Earth! But in these past <b>${words[2]}</b> years, the previous administration has done a <b>${words[3]}</b> job handling the <b>${words[4]}</b> situation, and they've allowed for far-<b>${words[5]}</b> radicals like <b>${words[6]}</b> to shape the country. Well, not anymore.</p>
            <p>With my new administration, we will see a return to laws based on real values, the values that <b>${words[7]}</b> teaches us in <b>${words[8]}</b>. We are going to do something about the <b>${words[9]}</b> who are taking our <b>${words[10]}</b>. We are going to protect our nation's <b>${words[11]}</b>. And finally, we are going to make sure our <b>${words[12]}</b> learn that there are only <b>${words[13]}</b> genders!</p>
            <p>We are going to make <b>${words[14]}</b> <b>${words[15]}</b> again!"</p>`; // access the words from the array in the madlib where you want them to show up

        madlib.innerHTML = myText;
    }


    // FORM PAGINATION


    document.querySelector(`#c1`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage1`).classList.add(`displayNone`);
        document.querySelector(`#formPage2`).classList.remove(`displayNone`);

        document.querySelector(`#q5`).focus();
    });

    document.querySelector(`#gb1`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage2`).classList.add(`displayNone`);
        document.querySelector(`#formPage1`).classList.remove(`displayNone`);

        document.querySelector(`#q4`).focus();
    });

    document.querySelector(`#c2`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage2`).classList.add(`displayNone`);
        document.querySelector(`#formPage3`).classList.remove(`displayNone`);

        document.querySelector(`#q9`).focus();
    });

    document.querySelector(`#gb2`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage3`).classList.add(`displayNone`);
        document.querySelector(`#formPage2`).classList.remove(`displayNone`);

        document.querySelector(`#q8`).focus();
    });

    document.querySelector(`#c3`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage3`).classList.add(`displayNone`);
        document.querySelector(`#formPage4`).classList.remove(`displayNone`);

        document.querySelector(`#q13`).focus();
    });

    document.querySelector(`#gb3`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#formPage4`).classList.add(`displayNone`);
        document.querySelector(`#formPage3`).classList.remove(`displayNone`);

        document.querySelector(`#q12`).focus();
    });


    // OVERLAY CONTROLS


    document.querySelector(`#replay`).addEventListener(`click`, function(event){
        event.preventDefault();

        window.location.reload();
    });

    document.querySelector(`#close`).addEventListener(`click`, function(event){
        event.preventDefault();

        document.querySelector(`#sitePageResults`).classList.add(`displayNone`);
    });

    document.addEventListener(`keydown`, function(event){
        if (event.key === `Escape`) {
            document.querySelector(`#sitePageResults`).classList.add(`displayNone`);
        }
    });


    // HINT VISIBILITY


    document.querySelector(`#q1`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint1`).style.color = `#202020`;
    });
    document.querySelector(`#q1`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint1`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q2`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint2`).style.color = `#202020`;
    });
    document.querySelector(`#q2`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint2`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q3`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint3`).style.color = `#202020`;
    });
    document.querySelector(`#q3`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint3`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q4`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint4`).style.color = `#202020`;
    });
    document.querySelector(`#q4`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint4`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q5`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint5`).style.color = `#202020`;
    });
    document.querySelector(`#q5`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint5`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q6`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint6`).style.color = `#202020`;
    });
    document.querySelector(`#q6`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint6`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q7`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint7`).style.color = `#202020`;
    });
    document.querySelector(`#q7`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint7`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q8`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint8`).style.color = `#202020`;
    });
    document.querySelector(`#q8`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint8`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q9`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint9`).style.color = `#202020`;
    });
    document.querySelector(`#q9`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint9`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q10`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint10`).style.color = `#202020`;
    });
    document.querySelector(`#q10`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint10`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q11`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint11`).style.color = `#202020`;
    });
    document.querySelector(`#q11`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint11`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q12`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint12`).style.color = `#202020`;
    });
    document.querySelector(`#q12`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint12`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q13`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint13`).style.color = `#202020`;
    });
    document.querySelector(`#q13`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint13`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q14`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint14`).style.color = `#202020`;
    });
    document.querySelector(`#q14`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint14`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q15`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint15`).style.color = `#202020`;
    });
    document.querySelector(`#q15`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint15`).style.color = `#FFFFFF`;
    });

    document.querySelector(`#q16`).addEventListener(`focus`, function(event){
        document.querySelector(`#hint16`).style.color = `#202020`;
    });
    document.querySelector(`#q16`).addEventListener(`blur`, function(event){
        document.querySelector(`#hint16`).style.color = `#FFFFFF`;
    });

})();