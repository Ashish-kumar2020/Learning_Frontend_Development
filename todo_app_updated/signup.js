console.log("Authentication");

const fullName = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const sigupBtn = document.getElementById("sigupBtn");

async function createUser(e) {
  e.preventDefault();

  let name = fullName.value;
  let password = passwordInput.value;
  let email = emailInput.value;

  console.log(fullName.value);
  console.log(emailInput.value);
  console.log(passwordInput.value);

  const userDetails = {
    name: name,
    email: email,
    password: password,
  };
  try {
    const signupUser = await fetch("http://localhost:4005/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (!signupUser.ok) {
      throw new Error("Network response was not ok");
    } else {
      name.value = "";
      password.value = "";
      email.value = "";
    }
  } catch (e) {
    console.error("There was a problem with signup the user :", error);
  }
}

async function signInUser(e) {
  e.preventDefault();
}

sigupBtn.addEventListener("click", createUser);
