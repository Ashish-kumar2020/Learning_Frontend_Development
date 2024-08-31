console.log("Todo Web App");

const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModalBtn");
const closeModal = document.getElementsByClassName("close")[0];

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
