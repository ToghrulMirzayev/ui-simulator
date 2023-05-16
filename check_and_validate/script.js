const input = document.getElementById('dataInput');
const square = document.getElementById('validationSquare');
square.style.backgroundColor = '#e3e0d7';
square.style.borderColor = '#8bc34a';


input.addEventListener('input', function() {
  const value = input.value.trim();

  if (value === '') {
    square.textContent = '';
    square.style.backgroundColor = '#e3e0d7';
    square.style.borderColor = '#8bc34a';
    square.style.color = '#8bc34a';
  } else if (isNaN(value)) {
    square.textContent = 'Not a number';
    square.style.backgroundColor = '#f44336';
    square.style.borderColor = '#f44336';
    square.style.color = 'white';
  } else if (value < 0) {
    if (Number.isInteger(Number(value))) {
      square.textContent = 'Negative integer';
    } else {
      square.textContent = 'Negative number';
    }
    square.style.backgroundColor = '#f44336';
    square.style.borderColor = '#f44336';
    square.style.color = 'white';
  } else if (!Number.isInteger(Number(value))) {
    square.textContent = 'Not an integer';
    square.style.backgroundColor = '#f44336';
    square.style.borderColor = '#f44336';
    square.style.color = 'white';
  } else if (value < 10 || value > 50) {
    square.textContent = 'Not in range';
    square.style.backgroundColor = '#f44336';
    square.style.borderColor = '#f44336';
    square.style.color = 'white';
  } else {
    square.textContent = 'Valid';
    square.style.backgroundColor = '#8bc34a';
    square.style.borderColor = '#8bc34a';
    square.style.color = 'white';
  }
});