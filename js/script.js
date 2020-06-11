// ********** Variables
const designSelectElement = document.getElementById('design');
const colorSelectElement = document.getElementById('color');
const colorOptionElements = colorSelectElement.querySelectorAll('option');

// ********** Job Role

// * Hide 'Other' Job Role
const otherRole = document.getElementById('other-title');
otherRole.style.display = 'none';

const role = document.querySelector('#title');

role.addEventListener('change', (e) => {
  if (role.value === 'other') {
    otherRole.style.display = 'block';
  } else {
    otherRole.style.display = 'none';
  }
});

// ********** T-Shirt Section

// * Hide T-shirt Color Options Until Theme is Chosen
colorSelectElement.style.display = 'none';
colorSelectElement.previousElementSibling.style.display = 'none';
const colorPlaceholder = document.createElement('option');
colorPlaceholder.innerHTML = 'Please select a T-shirt theme';
colorPlaceholder.selected = 'selected';
colorPlaceholder.disabled = true;
colorSelectElement.prepend(colorPlaceholder);
for (let i = 0; i < colorOptionElements.length; i++) {
  colorOptionElements[i].hidden = true;
}

// * Event Listener for Design Select
designSelectElement.addEventListener('change', (e) => {
  if (designSelectElement.value === 'js puns') {
    colorPlaceholder.hidden = true;
    colorSelectElement.style.display = 'block';
    colorSelectElement.previousElementSibling.style.display = 'block';
    colorPlaceholder.selected = '';
    for (let i = 0; i < colorOptionElements.length; i++) {
      if (
        colorOptionElements[i].value == 'cornflowerblue' ||
        colorOptionElements[i].value == 'darkslategrey' ||
        colorOptionElements[i].value == 'gold'
      ) {
        colorOptionElements[i].hidden = false;
        colorOptionElements[i].selected = true;
      } else {
        colorOptionElements[i].hidden = true;
      }
    }
  }

  if (designSelectElement.value === 'heart js') {
    colorPlaceholder.hidden = true;
    colorSelectElement.style.display = 'block';
    colorSelectElement.previousElementSibling.style.display = 'block';
    colorPlaceholder.selected = '';
    for (let i = 0; i < colorOptionElements.length; i++) {
      if (
        colorOptionElements[i].value == 'tomato' ||
        colorOptionElements[i].value == 'steelblue' ||
        colorOptionElements[i].value == 'dimgrey'
      ) {
        colorOptionElements[i].hidden = false;
        colorOptionElements[i].selected = true;
      } else {
        colorOptionElements[i].hidden = true;
      }
    }
  }

  if (designSelectElement.value === 'select') {
    colorSelectElement.style.display = 'none';
    colorSelectElement.previousElementSibling.style.display = 'none';
    for (let i = 0; i < colorOptionElements.length; i++) {
      colorOptionElements[i].hidden = true;
      colorOptionElements[i].selected = false;
    }

    colorPlaceholder.hidden = false;
    colorPlaceholder.selected = true;
  }
});

// ************ Register for Activities Section
const activities = document.querySelectorAll('fieldset.activities input');
const activitiesContainer = document.querySelector('.activities');
const totalCostDiv = document.createElement('div');
totalCostDiv.classList.add('cost-container');
const totalCostH3 = document.createElement('h3');
totalCostDiv.appendChild(totalCostH3);
activitiesContainer.appendChild(totalCostDiv);
let totalCost = 0;

for (let j = 0; j < activities.length; j++) {
  activities[j].addEventListener('change', (e) => {
    const sched = e.target.getAttribute('data-day-and-time');
    if (e.target.checked) {
      totalCost += parseInt(e.target.getAttribute('data-cost'));
      activities.forEach((activity) => {
        if (
          activity.getAttribute('data-day-and-time') === sched &&
          !activity.checked
        ) {
          activity.disabled = true;
          activity.parentElement.style.color = 'lightgrey';
        }
      });
      totalCostH3.innerHTML = `Total: $${totalCost}`;
    } else {
      totalCost -= parseInt(e.target.getAttribute('data-cost'));
      activities.forEach((activity) => {
        if (
          activity.getAttribute('data-day-and-time') === sched &&
          activity.disabled
        ) {
          activity.disabled = false;
          activity.parentElement.style.color = 'black';
        }
      });
      if (totalCost > 0) {
        totalCostH3.innerHTML = `Total: $${totalCost}`;
      } else {
        totalCostH3.innerHTML = '';
      }
    }
  });
}

// ****************** Payment Info Section

const payTypeSelect = document.querySelector('#payment');
const payTypes = document.querySelectorAll('#payment option');
const payPal = document.querySelector('#paypal');
const creditCard = document.querySelector('#credit-card');
const bitCoin = document.querySelector('#bitcoin');

payPal.style.display = 'none';
bitCoin.style.display = 'none';
payTypes[0].disabled = true;
payTypes[1].selected = true;

payTypeSelect.addEventListener('change', (e) => {
  if (e.target.value === 'credit card') {
    payPal.style.display = 'none';
    bitCoin.style.display = 'none';
    creditCard.style.display = 'block';
  } else if (e.target.value === 'bitcoin') {
    payPal.style.display = 'none';
    creditCard.style.display = 'none';
    bitCoin.style.display = 'block';
  } else {
    payPal.style.display = 'block';
    creditCard.style.display = 'none';
    bitCoin.style.display = 'none';
  }
});

// **************** Form Validation

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');

function isValidName(name) {
  return /^[a-zA-Z]*\s?[a-zA-Z]+?/.test(name);
}

function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function isValidCC(ccNum) {
  return /^[0-9]{13}[0-9]?[0-9]?[0-9]?$/.test(ccNum);
}

function isValidZip(zip) {
  return /^[0-9]{5}$/.test(zip);
}

function isValidCVV(cvv) {
  return /^[0-9]{3}$/.test(cvv);
}

// * Activities Validation
const activitiesArr = Array.from(activities);

function checked(arr) {
  const array = arr.filter((activity) => activity.checked);
  return array.length > 0;
}

// * Name Validation
nameInput.addEventListener('keyup', (e) => {
  const value = nameInput.value;
  if (value === '' || isValidName(value)) {
    nameInput.previousElementSibling.innerHTML = 'Name:';
    nameInput.previousElementSibling.style.color = 'black';
    nameInput.style.color = 'black';
  } else {
    nameInput.previousElementSibling.innerHTML =
      'Name: <span><em>Please Enter A Name</em></span>';
    nameInput.previousElementSibling.style.color = 'red';
    nameInput.style.color = 'red';
  }
});

// * Email Validation
emailInput.addEventListener('keyup', (e) => {
  const value = emailInput.value;
  if (value === '' || isValidEmail(value)) {
    emailInput.previousElementSibling.innerHTML = 'Email:';
    emailInput.previousElementSibling.style.color = 'black';
    emailInput.style.color = 'black';
  } else {
    emailInput.previousElementSibling.innerHTML =
      'Email: <span><em>Please Enter An Email Address</em></span>';
    emailInput.previousElementSibling.style.color = 'red';
    emailInput.style.color = 'red';
  }
});

// * Credit Card Validation
function creditCardCheck() {
  const ccNum = document.querySelector('#cc-num');
  const zip = document.querySelector('#zip');
  const cvv = document.querySelector('#cvv');
  if (payTypeSelect.value === 'credit card') {
    if (
      isValidCC(ccNum.value) &&
      isValidZip(zip.value) &&
      isValidCVV(cvv.value)
    ) {
      return true;
    }
    if (!isValidCC(ccNum.value)) {
      ccNum.previousElementSibling.style.color = 'red';

      if (ccNum.value.length === 0) {
        ccNum.previousElementSibling.innerHTML =
          '<em>Provide A Valid Credit Card Number</em>';
      }

      if (ccNum.value.length < 13 && ccNum.value.length > 0) {
        ccNum.previousElementSibling.innerHTML =
          '<em>Please Enter A Minimum of 13 Digits</em>';
      }
      if (ccNum.value.length > 16) {
        ccNum.previousElementSibling.innerHTML =
          '<em>Please Enter A Maximum of 16 Digits</em>';
      }
    } else {
      ccNum.previousElementSibling.style.color = 'black';
      ccNum.previousElementSibling.innerHTML = 'Card Number:';
    }

    if (!isValidZip(zip.value)) {
      zip.previousElementSibling.innerHTML = '<em>5 Digits</em>';
      zip.previousElementSibling.style.color = 'red';
    } else {
      zip.previousElementSibling.innerHTML = 'Zip Code:';
      zip.previousElementSibling.style.color = 'black';
    }

    if (!isValidCVV(cvv.value)) {
      cvv.previousElementSibling.innerHTML = '<em>CVV: </em>';
      cvv.previousElementSibling.style.color = 'red';
    } else {
      cvv.previousElementSibling.innerHTML = 'CVV:';
      cvv.previousElementSibling.style.color = 'black';
    }

    return false;
  } else {
    return true;
  }
}

// * Event Listener for Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = isValidName(nameInput.value);
  const email = isValidEmail(emailInput.value);
  const activities = checked(activitiesArr);
  const creditCard = creditCardCheck();

  if (!name) {
    nameInput.previousElementSibling.innerHTML =
      'Name: <span><em>Please Enter A Name</em></span>';
    nameInput.previousElementSibling.style.color = 'red';
    nameInput.style.color = 'red';
  }

  if (!email) {
    emailInput.previousElementSibling.innerHTML =
      'Email: <span><em>Please Enter An Email Address</em></span>';
    emailInput.previousElementSibling.style.color = 'red';
    emailInput.style.color = 'red';
  }

  if (!activities) {
    activitiesContainer.firstElementChild.innerHTML =
      '<em>Please Choose at least One Activity';
    activitiesContainer.firstElementChild.style.color = 'red';
  }

  if (!name || !email || !activities || !creditCard) {
    alert('Please Complete All Required Inputs');
  }

  if (name && email && activities && creditCard) {
    console.log('Submitted!!');
    location.reload();
  }
});
