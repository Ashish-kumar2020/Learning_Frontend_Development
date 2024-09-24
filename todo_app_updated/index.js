const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModalBtn");
const closeModal = document.getElementsByClassName("close")[0];
const todosDisplayContainer = document.querySelector(".todosdisplaycontainer");
const titleinput = document.querySelector("#titleinput");
const submitTodo = document.querySelector("#submitTodo");
const descriptionInput = document.querySelector("#descriptionInput");

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

const token = localStorage.getItem("token");
console.log(token);
async function fetchAllTodos() {
  const API_URL = "http://localhost:4005/fetchtodos";

  try {
    const getAllToods = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    const response = await getAllToods.json();
    console.log(response.usertodos);

    displayAllTodos(response.usertodos);
  } catch (e) {
    console.error("There was a problem with signup the user :", error);
  }
}

function displayAllTodos(todo) {
  todosDisplayContainer.innerHTML = "";
  todo.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todocard");
    todoCard.innerHTML = `
    <div class="todocardtobar">
        <h2 class="title">${todo.title}</h2>
        <div class="menuBtn">
          <button class="todoeditdelete">Edit</button>
          <button class="todoeditdelete">Delete</button>
          <button class="todoeditdelete">Donw</button>
        </div>
      </div>
      <hr />
      <div class="tododescription">
        <h2 class="description">${
          todo.description || "No description provided."
        }</h2>
      </div>
      `;
    todosDisplayContainer.appendChild(todoCard);
  });
}

async function addNewTodo() {
  const title = titleinput.value;
  const description = descriptionInput.value;
  const done = false;

  const newTodoDetails = {
    title: title,
    description: description,
    done: done,
  };
  try {
    const addTodo = await fetch("http://localhost:4005/createtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(newTodoDetails),
    });
    const response = await addTodo.json();
    console.log(response);
  } catch (e) {
    console.error("There was a problem with signup the user :", error);
  }
}
document.addEventListener("DOMContentLoaded", fetchAllTodos);
submitTodo.addEventListener("click", addNewTodo);
