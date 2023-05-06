const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#toggle-theme)');
const counter = document.getElementById('counter');

checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    counter.textContent = parseInt(counter.textContent) + 1;
  }

  checkbox.addEventListener('change', () => {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
    counter.textContent = checkedCount;
  });
});