// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다
// delete 버튼을 누르먄 할일이 삭제된다
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = "all";
let filterList = [];

addButton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  // 객체로 만들어줌
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  // 내가 선택한 탭에 따라서 리스트를 달리 보여준다.
  // all : taskList
  // ongoing, done : filterList
  let list = [];
  if (mode === "all") {
    // taskList
    list = taskList;
  } else if (mode === "ongoing" || mode === "done") {
    // filterList
    list = filterList;
  }

  let resultHtml = "";

  for (let i = 0; i < list.length; i++) {
    // 끝난 것
    if (list[i].isComplete == true) {
      resultHtml += `<div class="task done">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <i class="fa-solid fa-check" style="color: #B197FC;" onClick="toggleComplete('${list[i].id}')"></i>
          <i class="fa-solid fa-trash-can" style="color: #fa0511;" onClick="deleteTask('${list[i].id}')"></i>
        </div>
      </div>`;
    }
    // 안끝난것
    else {
      resultHtml += `
        <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <i class="fa-solid fa-check" style="color: #B197FC;" onClick="toggleComplete('${list[i].id}')"></i>
            <i class="fa-solid fa-trash-can" style="color: #fa0511;" onClick="deleteTask('${list[i].id}')"></i>
        </div>
      </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHtml;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

// 누구를 클릭했는지에 대한 정보를 이 event 가 가지고 있다
function filter(event) {
  mode = event.target.id;
  filterList = [];
  if (mode === "all") {
    render();
  } else if (mode === "ongoing") {
    // 리스트에 아이템들이 여러개 인데
    // 그 중 진행 중인 것만 뽑아야함
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode === "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
