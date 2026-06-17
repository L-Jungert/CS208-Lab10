function domLoaded() {
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", addBtnClick);

  const taskInput = document.getElementById("task-input");
  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });
}

function addBtnClick() {
  const taskInput = document.getElementById("task-input");
  const newTask = taskInput.value;

  if (newTask !== "") {
    addTask(newTask);
  }

  taskInput.value = "";
  taskInput.focus();
}

function addTask(newTask) {
  const li = document.createElement("li");
  li.innerHTML =
    '<span class="task-text">' +
    newTask +
    '</span><button class="done-btn">&#10006;</button>';

  const list = document.querySelector("ol");
  list.appendChild(li);

  const doneButtons = document.querySelectorAll(".done-btn");
  const lastButton = doneButtons[doneButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  const li = event.target.parentNode;
  li.parentNode.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);
