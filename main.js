// 추가 버튼을 누르면 할일 리스트에 추가된다.
document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
  // 입력한 할일을 가져온다.
  let inputTask = document.getElementById("new-task").value;
  console.log(inputTask);

  // 할일 리스트에 추가
  let newTask = document.createElement("li");
  newTask.textContent = inputTask;
  document.querySelector(".task-list").appendChild(newTask);
}
