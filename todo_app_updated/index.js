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

// Fetch all todos on Window load

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

// Display all the todos

function displayAllTodos(todo) {
  todosDisplayContainer.innerHTML = "";
  todo.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todocard");
    todoCard.innerHTML = `
    <div class="todocardtobar">
        <h2 class="title">${todo.title}</h2>
        <div class="menuBtn">
          <button class="todoeditdelete editBtn" >Edit</button>
          <button class="todoeditdelete deleteBtn" >Delete</button>
          <button class="todoeditdelete doneBtn" >Done</button>
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
    const deleteBtn = todoCard.querySelector(".deleteBtn");
    const doneBtn = todoCard.querySelector(".doneBtn");
    const editBtn = todoCard.querySelector(".editBtn");
    if (todo.done) {
      todoCard.querySelector(".title").style.textDecoration = "line-through";
      todoCard.querySelector(".description").style.textDecoration =
        "line-through";
      doneBtn.disabled = true;
    }
    deleteBtn.addEventListener("click", () => deleteTodo(todo._id));
    doneBtn.addEventListener("click", () => markDoneTodo(todo._id, true));
    editBtn.addEventListener("click", () =>
      editTodos(todo._id, todo.userId, todo.description)
    );
  });
}
// Edit todo
async function editTodos(todoId, userId, currentDescription) {
  const description = prompt("Edit Current description :", currentDescription);
  if (description !== null) {
    const edit = await fetch("http://localhost:4005/updatetodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        todoId: todoId,
        description: description,
        userId: userId,
      }),
    });

    if (edit.ok) {
      await markDoneTodo(todoId, false);
      await fetchAllTodos();
    }
  }
}

// Mark done todo
async function markDoneTodo(todoId, done = true) {
  const taskComplete = await fetch("http://localhost:4005/markdone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ todoId: todoId, done: done }),
  });

  if (taskComplete.ok) {
    fetchAllTodos();
  }
}
// Delete todo
async function deleteTodo(todoId) {
  const removeTodo = await fetch("http://localhost:4005/deletodo", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ todoId: todoId }),
  });
  // const response = await removeTodo.json();
  if (removeTodo.ok) {
    fetchAllTodos();
  }
}

// Add new Todo
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
    if (addTodo.ok) {
      titleinput.value = "";
      descriptionInput.value = "";
      modal.style.display = "none";
      fetchAllTodos();
    }
  } catch (e) {
    console.error("There was a problem with signup the user :", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchAllTodos);
submitTodo.addEventListener("click", addNewTodo);
