const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errors = {
  empty: "Este campo no puede estar vacío",
  type: "Este campo debe contener un email valido",
};

function showError(element, messages) {
  const inputError = document.querySelector(`.error-${element.id}`);
  if (element.value.trim().length === 0) {
    if (!inputError) {
      element.insertAdjacentHTML(
        "afterend",
        `<p class="error-${element.id}">* ${messages.empty}</p>`
      );
    }
  } else if (inputError) {
    inputError.remove();
  }
  if (element.id === "email") {
    const erroType = document.querySelector(".error-type");

    if (!emailRegex.test(element.value)) {
      if (!erroType) {
        element.insertAdjacentHTML(
          "afterend",
          `<p class="error-type">* ${messages.type}</p>`
        );
      }
    } else if (erroType) {
      erroType.remove();
    }
  }

  return;
}

function validation() {
  showError(inputName, errors);
  showError(inputEmail, errors);
}

const next = document.querySelector(".step1 .btn");

next.addEventListener("click", function () {
  validation();
});
