let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

let taskList = [];

function addTask() {
  let task = {
    id: generateRandomId(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);

  console.log(task);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete) {
      resultHTML += `
      <div class="task task-done-area">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
          <i class="fa-solid fa-arrow-rotate-left" style="color: #aaadb1;" onclick="completeToggle('${taskList[i].id}')"></i>
          <i class="fa-solid fa-trash-can" style="color: #e60f19;"></i>
        </div>
    </div>`;
    } else {
      resultHTML += `
      <div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <i class="fa-solid fa-check" style="color: #63E6BE;" onclick="completeToggle('${taskList[i].id}')"></i>
          <i class="fa-solid fa-trash-can" style="color: #e60f19;"></i>
        </div>
    </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function generateRandomId() {
  return Math.random().toString(36).substr(2, 16);
}

function completeToggle(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }

  render();
}
