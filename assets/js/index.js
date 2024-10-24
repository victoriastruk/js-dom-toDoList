"use strict";

const taskData = [];

const btnAdd = document.querySelector(".btn");
btnAdd.addEventListener("click", addNewTask);

const ul = document.createElement("ul");
document.body.append(ul);
function addNewTask() {
  const inputValue = document.querySelector("input").value;
  taskData.push(inputValue);
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  ul.append(listItem);

  const task = document.createElement("p");
  task.textContent = inputValue;
  listItem.append(task);

  const iconTrash = document.createElement("i");
  iconTrash.classList.add("fa-solid", "fa-trash", "trash");
  listItem.append(iconTrash);
  iconTrash.addEventListener("click", function (e) {
    const taskText = task.textContent;

    const taskIndex = taskData.indexOf(taskText);

    if (taskIndex > -1) {
      taskData.splice(taskIndex, 1);
    }

    listItem.remove();
  });
}
