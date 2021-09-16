const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error Message (We have to access parent element div and will manuplate its class)

function showError(input, message){

  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector('small');
  small.innerText = message;


}

// success Message
function showSuccess(input, message){

  const formControl = input.parentElement;
  formControl.className = "form-control success";


}

// valid email   Regular Expressions Learning

function checkEmail (input){

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (re.test(input.value.trim())){

    showSuccess(input);

  } else{

    showError(input, 'Email is not valid');

  }

}

// isRequired   Array Higher Order Methods Learning

function isRequired(inputArr){

  inputArr.forEach(input => {

    if (input.value.trim() === ""){

      showError(input, `${getFieldName(input)} is required`);

    } else{
      showSuccess(input);
    }
    
  });


}

// how to require first letter as UpperCase

function getFieldName(input){

  return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// CheckLength Function

function checkLength (input, min, max)
{

   if(input.value.length < min){

    showError(input, `${getFieldName(input)} must be minimum of ${min} chracters`);

   } else if (input.value.length > max)
   {
    showError(input, `${getFieldName(input)} must be maximum of ${max} chracters`);
   } else{
     showSuccess(input);
   }

}


// Password Matching

function checkPasswordsMatch(input1, input2){

  if(input1.value !== input2.value){

    showError(input2, 'Passwrod do not match');

  }

}




// Add event Listner (We need to call functions inside)

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  /*if (username.value === ''){
    showError(username, 'field is required');
  }
  else{
    showSuccess(username);
  }

  if (email.value === ''){
    showError(email, 'field is required');
  } else if (!isValidEmail(email.value)){

    showError(email, 'email is not valid');

  } else{
    showSuccess(email);
  }*/

  // Refactor the code to make it reuseable

  isRequired([firstname, lastname, username, email, password, password2]);

  // check lentgh of input
  checkLength(username, 4, 15);
  checkLength(password, 8, 20);

  // Email validation 
  checkEmail(email)
  

  // check Password Matching

  checkPasswordsMatch(password, password2);
 



  


});