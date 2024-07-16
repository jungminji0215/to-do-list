// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiWlH_rkm_DZoo5ppQDqpCg5o-1hgoGNU",
  authDomain: "todolist-a1b7b.firebaseapp.com",
  projectId: "todolist-a1b7b",
  storageBucket: "todolist-a1b7b.appspot.com",
  messagingSenderId: "416626392704",
  appId: "1:416626392704:web:7215c827e0cdeb1a597065",
  measurementId: "G-71C9PBMBK8",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
