const pw = document.getElementById("pw");
const pwc = document.getElementById("pwc");
const btn = document.getElementById("submit");

let confirm = function () {
  if (pw.value === pwc.value) {
    pwc.setCustomValidity("");
  } else {
    pwc.setCustomValidity("Passwords do not match.");
  }
};

btn.addEventListener("click", function () {});

console.log(pw);
