(function(){
    `use strict`;
    console.log(`Reading JS`);

    // DOM reference variables
    const myForm = document.querySelector(`form`);
    const madlib = document.querySelector(`#madlib`);
    const formData = document.querySelectorAll(`input[type=text]`);

    // event handler that kicks everything off
    myForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        console.log(`form submitted`);
        processFormData(formData);
    });

    document.querySelectorAll(`input[type="submit"]`);

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
        document.querySelector(`#${errorId}`).focus(); // puts focus on the field
    }

    function makeMadlib(words){
        const myText = `
            <h3>"My Fellow <b>${words[0]}</b>...</h3>

            <p>This nation used to be the <b>${words[1]}</b> nation on Earth. But in these past <b>${words[2]}</b> years, the previous administration has done a <b>${words[3]}</b> job handling the <b>${words[4]}</b> situation, and they've allowed for far-<b>${words[5]}</b> radicals like <b>${words[6]}</b> to shape the country. Well, not anymore.</p>
            <p>With my new administration, we will see a return to laws based on real values, the values that <b>${words[7]}</b> teaches us in <b>${words[8]}</b>. We are going to do something about the <b>${words[9]}</b> who are taking our <b>${words[10]}</b>. We are going to protect our nation's <b>${words[11]}</b>. And finally, we are going to make sure our <b>${words[12]}</b> learn that there are only <b>${words[13]}</b> genders!</p>
            <p>We are going to make <b>${words[14]}</b> <b>${words[15]}</b> again!"</p>`; // access the words from the array in the madlib where you want them to show up

        madlib.innerHTML = myText;

        // clear out all the fields after the madlib is created
        for (const eachField of formData){
            eachField.value = ``;
        }
    }
})();