import { showError } from "./src/validations.js";

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");

function validation() {
  if (showError(inputName) && showError(inputEmail)) {
    return true;
  }
  return false;
}

const page2 = document.querySelector(".step1 .btn");

page2.addEventListener("click", function () {
  const page = document.querySelector(".pages p");
  const selected = document.querySelector(".page2");
  const complete = document.querySelector(".page1");
  const hidden = document.querySelector(".step1");
  const unhidden = document.querySelector(".step2");

  if (validation()) {
    hidden.classList.add("hidden");
    unhidden.classList.remove("hidden");
    complete.classList.remove("active");
    selected.classList.add("active");
    page.textContent = "Step 2 of 3";

    const summaryInfo = document.querySelectorAll(".summary-info p");

    summaryInfo.forEach(function (e) {
      if (e.textContent === "Name: ") {
        e.insertAdjacentText("beforeend", inputName.value);
      } else if (e.textContent === "Email: ") {
        e.insertAdjacentText("beforeend", inputEmail.value);
      }
    });

    return;
  }
});

const options = [];

function validation2(element) {
  element.addEventListener("change", function () {
    const selected = document.querySelector(`label[for="${element.id}"]`);
    if (element.checked) {
      options.push(selected.textContent);
      selected.classList.add("selected");
    } else {
      options.splice(options.indexOf(selected.textContent), 1);
      selected.classList.remove("selected");
    }
  });
}

const options1 = document.getElementById("option1");
const options2 = document.getElementById("option2");
const options3 = document.getElementById("option3");

[options1, options2, options3].forEach(validation2);

const page3 = document.querySelector(".step2 .btn");
page3.addEventListener("click", function () {
  const inputError = document.querySelector(".error-type");

  if (options.length === 0) {
    if (!inputError) {
      document
        .querySelector('label[for="option3"]')
        .insertAdjacentHTML(
          "afterend",
          '<p class="error-type">* Debe seleccionar al menos un item </p>'
        );
    }
    return;
  } else if (inputError) {
    inputError.remove();
  }
  const page = document.querySelector(".pages p");
  const selected = document.querySelector(".page3");
  const complete = document.querySelector(".page2");
  const hidden = document.querySelector(".step2");
  const unhidden = document.querySelector(".step3");
  hidden.classList.add("hidden");
  unhidden.classList.remove("hidden");
  complete.classList.remove("active");
  complete.classList.add("complete");
  selected.classList.add("active");
  page.textContent = "Step 3 of 3";

  const topics = document.querySelector(".summary-topics ul");

  options.forEach((e) => {
    topics.insertAdjacentHTML("beforeend", `<li>${e}</li>`);
  });
});

const submit = document.querySelector('.btn[type="submit"]');
submit.addEventListener("click", function (e) {
  const notification = document.querySelector(".card");
  e.preventDefault();
  notification.insertAdjacentHTML(
    "afterbegin",
    '<div class="notification">✅ Success</div>'
  );
  setTimeout(() => {
    document.querySelector(".notification").remove();
    location.reload();
  }, 3000);
});
