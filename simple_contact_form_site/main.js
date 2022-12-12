IMask(document.querySelector("[name=phone]"), { mask: "+00 (00) 0 0000-0000" });

const forms = document.querySelectorAll(".needs-validation");
forms.forEach((form) => {
  form.addEventListener("input", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
});
