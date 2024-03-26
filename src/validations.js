const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errors = {
  empty: "Este campo no puede estar vacío",
  type: "Este campo debe contener un email valido",
};

export function showError(element, messages = errors) {
  const inputError = document.querySelector(`.error-${element.id}`);

  //error de campos vacios

  if (element.value.trim().length === 0) {
    if (!inputError) {
      element.insertAdjacentHTML(
        "afterend",
        `<p class="error-${element.id}">* ${messages.empty}</p>`
      );
    }
    return false;
  } else if (inputError) {
    inputError.remove();
  }

  // error de tipo de correo

  if (element.id === "email") {
    const errorType = document.querySelector(".error-type");

    if (!emailRegex.test(element.value)) {
      if (!errorType) {
        element.insertAdjacentHTML(
          "afterend",
          `<p class="error-type">* ${messages.type}</p>`
        );
      }
      return false;
    } else if (errorType) {
      errorType.remove();
    }
  }
  return true;
}
