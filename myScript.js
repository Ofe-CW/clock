// $$$$$$$$$$$$$$ From previous class $$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
//         let date  = new Date().toLocaleTimeString(locale, {timeZone: timeZ});
//         console.log(date)
//         setTimeout(handleChange, 5);
//          document.getElementById('clock').innerHTML = date;

//============= puedocode ====================//

// Start Here 
// create a function called 'initialDate' without an argument
// declear  2 variables loc and tz in it
// create an eventlistener for DOMContentLoader and pass in an anonymous function. in the function create an option variable that equates to the option value using a selector and passing in 'option' element selector(hence the inital option selected)

// console.log option variable object style eg. console.log({x})
// initiate the method and test on the browser using the second tab on the google dev tool, but right clicking on page, click inspect and select console tab then initiate method then reload browser tab
// equate loc variable to the first split index [0] at '_' and the second [1] tz 
// console.log both variables, object style then run your application and inspect on console tab then change the select option to see

// call the over loaded handleDate function and pass in loc, tz and initialDate "method" as arguments/parameters respectively


    

//create event listener, let it listen for the dom content loader
// pass in an annoymus function that also would listen for something else
//  add default attribute in select/options ie selected
//on the function of the first event listerner pass in an annoymous function/traditional function
// with the former, select the select class or element and also create another eventlistner, this time listen for input and second argument should be a method that handles the selected, NB do not pass in an argument


// create an external function with the previous name passed in the second event listener with an argument of 'e' for event
//############ what is the difference between a method and a function and components of a function and what happens when you do not pass an argument where it is called first


// in the new function, create a variable called select and equate to e.target.value then console log and test
// split 'select' into 2 variables 'locale' and 'timeZ' at '_' in index 0 and 1 respectively then console.log both using object style


// !!!!!!!!!!!!!!! Initial Date %%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Skip if already created in start here
//then proceed as previous class to see the data change by creating another external function named handleDate with parameters/arguments of locale and timeZ
//finally return to your handleSelect function, in the bottow pass in your call your date with parameters respectively



// %%%%%%%%%%%%%%%%%%%%%%% Start Below here $$$$$$$$$$$$$$$$$$$$$$$$$ //


function initialDate() {
    let loc, tz;
    document.addEventListener('DOMContentLoaded', () => {
        let option = document.querySelector('option').value;
        console.log({option})
        loc = option.split('_')[0]
        tz = option.split('_')[1]
        console.log({loc, tz})
        handleChange(loc, tz);
    })
}
initialDate()



function handleChange(locale, timeZ) {
    let date  = new Date().toLocaleTimeString(locale, {timeZone: timeZ});
        console.log({date})
        
         document.getElementById('clock').innerHTML = date;
         setTimeout(handleChange, 1000);
}

// bonus add background image to change depending on what time of day


