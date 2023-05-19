const items = document.querySelectorAll(".item");
let draggedItem = null;

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("drop", drop);
  item.addEventListener("dragend", dragEnd);
});

function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add("dragging-over");
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");
  const item = document.getElementById(itemId);
  const container = event.target.closest(".container");
  const dropTarget = event.target;

  if (
    dropTarget !== draggedItem &&
    container.contains(dropTarget) &&
    !dropTarget.contains(draggedItem)
  ) {
    const offsetX =
      event.clientX -
      container.getBoundingClientRect().left -
      draggedItem.clientWidth / 2 +
      container.clientWidth / 2;
    const offsetY =
      event.clientY -
      container.getBoundingClientRect().top -
      draggedItem.clientHeight / 2 +
      container.clientHeight / 4;
    draggedItem.style.left = offsetX + "px";
    draggedItem.style.top = offsetY + "px";

    const dropTargetIndex = Array.from(container.children).indexOf(dropTarget);
    const draggedItemIndex = Array.from(container.children).indexOf(
      draggedItem
    );

    if (draggedItemIndex < dropTargetIndex) {
      container.insertBefore(draggedItem, dropTarget.nextSibling);
    } else {
      container.insertBefore(draggedItem, dropTarget);
    }

    checkOrder(container);
  }

  dropTarget.classList.remove("dragging-over");
  draggedItem.classList.remove("dragging");
  draggedItem = null;
}

function dragEnd() {
  items.forEach((item) => {
    item.classList.remove("dragging-over");
    item.classList.remove("dragging");
  });
}

function checkOrder(container) {
  const items = container.querySelectorAll(".item");
  let currentOrder = "";

  items.forEach((item) => {
    currentOrder += item.textContent;
  });

  if (currentOrder === "TESTING") {
    const doneElement = document.createElement("div");
    doneElement.textContent = "DONE";
    doneElement.classList.add("done");
    container.appendChild(doneElement);
  } else {
    const doneElement = container.querySelector(".done");
    if (doneElement) {
      doneElement.remove();
    }
  }
}
