const pass = document.querySelectorAll(".pass-inp");
const passToggle = document.querySelectorAll(".pass-toggle");

passToggle.forEach((passToggler, togglerKey) => {
  passToggler.addEventListener("click", () => {
    pass.forEach((pass, passKey) => {
      if (togglerKey == passKey) {
        if (pass.type == "text") {
          pass.type = "password";
          passToggler.classList.remove('eye-active');
        } else {
          pass.type = "text";
          passToggler.classList.add('eye-active');
        }
      }
    });
  });
});
