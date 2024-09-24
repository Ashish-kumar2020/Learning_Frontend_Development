console.log("Signin");

const emailInput = document.getElementById("emailHolder");
const passwordInput = document.getElementById("passwordHolder");
const loginBtn = document.getElementById("loginBtn");

async function signInUser(e) {
  e.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;

  let userSigninData = {
    email: email,
    password: password,
  };
  try {
    const validateUser = await fetch("http://localhost:4005/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSigninData),
    });

    if (validateUser.ok) {
      email.value = "";
      password.value = "";
    }

    const response = await validateUser.json();
    console.log(response.token);
    localStorage.setItem("token", response.token);

    window.location.href = "index.html";
  } catch (e) {
    console.error("There was a problem with signup the user :", error);
  }
}

loginBtn.addEventListener("click", signInUser);
