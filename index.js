const modalElement = document.getElementById("modal");
const closeBtnEl = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalTextEl = document.getElementById("modal-text");
const modalInnerEl = document.getElementById("modal-inner");
const btnDivEl = document.getElementById("modal-choice-btns");
const declineEl = document.getElementById("decline");

setTimeout(function () {
  modalElement.style.display = "inline";
}, 1500);

closeBtnEl.addEventListener("click", closeModal);

function closeModal() {
  modalElement.style.display = "none";
}

declineEl.addEventListener("mouseover", function () {
  btnDivEl.classList.toggle("reverse");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formElements = new FormData(consentForm);
  const name = formElements.get("userName");

  modalTextEl.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`;
  const uploadTextEl = document.getElementById("uploadText");
  setTimeout(function () {
    uploadTextEl.textContent = "Making the sale...";
  }, 1500);

  setTimeout(function () {
    modalInnerEl.innerHTML = `
    <h2>Thanks <span class="modal-display-name"> ${name} </span>you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    closeBtnEl.disabled = false;
  }, 3000);
});
