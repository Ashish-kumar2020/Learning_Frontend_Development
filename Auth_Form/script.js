console.log("Authentication Form");

const username = document.getElementById("userName");
const pass = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const userSignIn = document.getElementById("usersignin");
const userSignInPass = document.getElementById("userpass");
const signInBtn = document.getElementById("signinBtn");
const getDetails = document.getElementById("getDetails");
const userNamedisplay = document.getElementById("userNamedisplay");

async function userSignUp() {
  console.log(username.value);
  console.log(pass.value);

  const sendUserDetails = await fetch("http://localhost:4006/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: pass.value,
    }),
  });
  const response = await sendUserDetails.json();
  console.log(response);
}

async function userSignInDetails() {
  console.log("SignIn UserName", userSignIn.value);
  console.log("SignIn Password", userSignInPass.value);

  const sendSignInDetails = await fetch("http://localhost:4006/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userSignIn.value,
      password: userSignInPass.value,
    }),
  });
  const response = await sendSignInDetails.json();
  console.log(response.token);
  localStorage.setItem("token", response.token);
}

async function getUserDetails() {
  let tokens = localStorage.getItem("token");
  const getUserDetailsFromBK = await fetch(
    "http://localhost:4006/userdetails",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: tokens,
      },
    }
  );
  const data = await getUserDetailsFromBK.json();
  console.log(data);
}

signupBtn.addEventListener("click", userSignUp);
signInBtn.addEventListener("click", userSignInDetails);
getDetails.addEventListener("click", getUserDetails);
