const tasks = document.querySelectorAll(".task");
const areas = document.querySelectorAll(".area-box");

function addDragListeners(task) {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  })

  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  })
}

tasks.forEach((task) => {
  addDragListeners(task);
})

const addTaskBtn = document.querySelector("#add-task button");
const taskInput = document.querySelector("#add-task-input");

function addTask(event) {
  event.preventDefault();
  if (taskInput.value != "") {
    const areaToDo = document.querySelector("#to-do-box");
    const div = document.createElement("p");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = taskInput.value;
    areaToDo.append(div);
    addDragListeners(div);
    taskInput.value = "";
  }
}

function dragOver() {
  this.classList.add("drag-over");
  const taskDragging = document.querySelector(".is-dragging");
  this.append(taskDragging);
}

function dragLeave() {
  this.classList.remove("drag-over");
}

areas.forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
})

addTaskBtn.addEventListener("click", addTask);

const deleteCompletedBtn = document.querySelector(".delete-completed-btn");
const doneBox = document.querySelector("#done-box");

deleteCompletedBtn.addEventListener("click", deleteCompletedTasks);

function deleteCompletedTasks(event) {
  event.preventDefault();
  const completedTasks = doneBox.querySelectorAll(".task");
  completedTasks.forEach((task) => {
    task.remove();
  });
}