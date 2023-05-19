const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const itemsContainer = document.getElementById("items");
const items = [];

addBtn.addEventListener("click", () => {
  const itemText = inputText.value.trim();
  if (itemText !== "") {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = itemText;
    items.push(item);
    itemsContainer.appendChild(item);
    inputText.value = "";
  }
});

deleteBtn.addEventListener("click", () => {
  if (items.length > 0) {
    const item = items.pop();
    itemsContainer.removeChild(item);
  }
});
