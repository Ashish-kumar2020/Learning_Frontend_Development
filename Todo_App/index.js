console.log("Todo Web App");

const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModalBtn");
const closeModal = document.getElementsByClassName("close")[0];
const todosDisplayContainer = document.querySelector(".todosdisplaycontainer");

const titleinput = document.querySelector("#titleinput");
const submitTodo = document.querySelector("#submitTodo");
const descriptionInput = document.querySelector("#descriptionInput");
let titleHolder = "";
let descriptionHolder = "";

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

// when user click outside of modal : this will close the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// API call to fetch All the TODOS

function fetchAllTodos() {
  const API_URL = "http://localhost:4001/fetchtodos";
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("API _ DATA : ", data.todo);

      displayAllTodos(data.todo);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

function displayAllTodos(todos) {
  todosDisplayContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todocard");
    todoCard.innerHTML = `
        <div class="todocardtobar">
        <h2 class="title">${todo.title}</h2>
        <div class="menuBtn">
          <button>Edit</button>
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

function addTodo() {
  titleHolder = titleinput.value;
  descriptionHolder = descriptionInput.value;
}

submitTodo.onclick = (value) => {
  addTodo();
  console.log(titleHolder);
  console.log(descriptionHolder);
  const newTodo = {
    title: titleHolder,
    description: descriptionHolder,
  };
  const BASE_API_URL = "http://localhost:4001/addtodo";
  fetch(BASE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.message);
      fetchAllTodos();
      titleinput.value = "";
      descriptionInput.value = "";
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch opertation");
    });
};

// window.onload = () => {
// };
fetchAllTodos();
