// Variables

const designSelectElement = document.getElementById('design');
const colorSelectElement = document.getElementById('color');
const colorOptionElements = colorSelectElement.querySelectorAll('option');

// Page Setup

// Hide 'Other' Job Role
const otherRole = document.getElementById('other-title');
otherRole.style.display = 'none';

// Hide T-shirt Color Options Until Theme is Chosen
colorSelectElement.disabled = true;
const colorPlaceholder = document.createElement('option');
colorPlaceholder.innerHTML = 'Please select a T-shirt theme';
colorPlaceholder.selected = 'selected';
colorPlaceholder.disabled = true;
colorSelectElement.prepend(colorPlaceholder);
for (let i = 0; i < colorOptionElements.length; i++) {
  colorOptionElements[i].hidden = true;
}

// T-Shirt Section

designSelectElement.addEventListener('change', (e) => {
  if (designSelectElement.value === 'js puns') {
    colorPlaceholder.hidden = true;
    colorSelectElement.disabled = false;
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
    colorSelectElement.disabled = false;
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
    colorSelectElement.disabled = true;
    for (let i = 0; i < colorOptionElements.length; i++) {
      colorOptionElements[i].hidden = true;
      colorOptionElements[i].selected = false;
    }

    colorPlaceholder.hidden = false;
    colorPlaceholder.selected = true;
  }
});

// Register for Activities Section
