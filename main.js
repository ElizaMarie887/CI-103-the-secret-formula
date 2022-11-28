//Part 1: The alerter

let alertForm = document.querySelector("#alertForm");

let alertInput = document.querySelector ("#alertInput");

alertForm.addEventListener('submit', function(event){
    event.preventDefault();

    alert(alertInput.value);

    alertInput.value = "";
})

//Part 2: Sanwich builder

let sandwichBuilder = document.querySelector("#sandwichForm");

let sammich = document.querySelectorAll("#sandwichForm .sammich")

for(let item of sammich){
    console.log(item.id);
}

sandwichBuilder.addEventListener('submit', function(event){
    event.preventDefault();

    let newStr = "";
    for(let i = 0; i < sammich.length; i++){
        if(sammich[i].checked === true){
            newStr += `${sammich[i].id}, `
        }
    }
    console.log(newStr);

    alert(`Your sandwhich contains: ${newStr}!`)

})

//Part 3: Haircut Appointment scheduler
let haircutForm = document.querySelector('#haircutForm');
let cutDate = document.querySelector('#date');
let stylist = document.querySelector('#stylist');
let longHair = document.querySelector('#long');
let shortHair = document.querySelector('short');
let hairLength= "";

haircutForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(longHair.checked === true){
        hairLength = "long hair"
    } else if (shortHair.checked === true){
        hairLength = "short hair"
    }
})
    //alert(`The date for you appointment is: ${cutDate.value}. Your stylist is: ${stylist.value}. You currently have ${hairLength}`)
  

//Part 4: Create Account

let accountForm = document.querySelector('#createAccountForm')
let email = document.querySelector('#emailAddy')
let username = document.querySelector('#username')
let password = document.querySelector('#password')
let cpassword = document.querySelector('#cPassword')

if(password !== cPassword){
    alert("Please make sure your passwords match!")
} else {
    (`Your email is ${email} and your user name is ${username}`)
}