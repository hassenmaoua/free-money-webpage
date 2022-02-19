const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function pressButton() {
  var email = document.getElementById("email__input").value;
  var password = document.getElementById("password__input").value;

  if (email.length === 0) alert("No email selected");
  else if (password.length === 0) alert("No password selected");
  else if (
    email.length > 0 &&
    !validateEmail(email) &&
    password.length > 0 &&
    password.length < 6
  )
    alert("Incorrect Email/Password Combination");
  else {
    const account = {
      email: document.getElementById("email__input").value,
      password: document.getElementById("password__input").value,
    };

    alert("Email : " + account.email + "\nPassword : " + account.password);
  }
}

document.getElementById("email__input").onblur = function () {
  var email = document.getElementById("email__input").value;

  if (email.length > 0 && !validateEmail(email))
    document.getElementById("errorEmail").innerHTML =
      '<i class="fa-solid fa-xmark">';
  else if (email.length > 4 && validateEmail(email))
    document.getElementById("correctEmail").innerHTML =
      '<i class="fa-solid fa-check"></i>';
  else {
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("correctEmail").innerHTML = "";
  }
};

document.getElementById("email__input").onkeydown = function () {
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("correctEmail").innerHTML = "";
};

document.getElementById("password__input").onblur = function () {
  var password = document.getElementById("password__input").value;

  if (password.length > 0 && password.length < 6)
    document.getElementById("errorPassword").innerHTML =
      '<i class="fa-solid fa-xmark">';
  else if (password.length >= 6)
    document.getElementById("correctPassword").innerHTML =
      '<i class="fa-solid fa-check"></i>';
  else {
    document.getElementById("errorPassword").innerHTML = "";
    document.getElementById("correctPassword").innerHTML = "";
  }
};

document.getElementById("password__input").onkeydown = function () {
  document.getElementById("errorPassword").innerHTML = "";
  document.getElementById("correctPassword").innerHTML = "";
};
