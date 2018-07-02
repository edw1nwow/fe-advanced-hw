const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");


function validate(evt) {

    const input = {};
    if (firstname.validity.patternMismatch || firstname.value =="") {
      input.firstNameFlag = false;
      firstname.setCustomValidity('Fist name must be without numbers');
    }
    else {
      input.firstNameFlag = true;
      input.firstName = firstname.value;
    }
  
    if (lastname.validity.patternMismatch || lastname.value =="") {
      input.lastNameFlag = false;
      lastname.setCustomValidity('Last name must be without numbers');
    }
    else {
      input.lastNameFlag = true;
      input.lastName = lastname.value;
    }
  
    if (tel.validity.patternMismatch || tel.value =="") {
      input.telFlag = false;
       tel.setCustomValidity('tel must be like +хх ххх ххх хх хх');
    }
    else {
      input.telFlag = true;
      input.tel = tel.value;
    }
  
  return input;
}

function showResults() {
  
    const fName = document.createElement('li');
    resultsList.append(fName);
  
      if(validate().firstNameFlag===true) {
        fName.textContent = 'SUCCESS:First name'
        fName.classList.add('success')
      }
      else {
        fName.textContent = 'ERROR: first name failed'
        fName.classList.add('error')
      }
  
    const lName = document.createElement('li');
    resultsList.append(lName);
  
      if(validate().lastNameFlag===true) {
        lName.textContent = 'SUCCESS:Last name'
        lName.classList.add('success')
      }
      else {
        lName.textContent = 'ERROR: last name failed'
        lName.classList.add('error')
      }
  
    const telNumber = document.createElement('li');
    resultsList.append(telNumber);
      if(validate().telFlag===true) {
        telNumber.textContent = 'SUCCESS: tel'
        telNumber.classList.add('success')
      }
    else {
       telNumber.textContent = 'ERROR: tel failed'
       telNumber.classList.add('error')
    }
}

submitBtn.addEventListener("click", showResults);
