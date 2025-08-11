// Referências dos elementos
const passwordContainer = document.getElementById("password_container");
const passwordText = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  const length = parseInt(document.getElementById("size").value);
  const includeUpper = document.getElementById("include_uppercase").checked;
  const includeLower = document.getElementById("include_lowercase").checked;
  const includeNumber = document.getElementById("include_number").checked;
  const includeSpecial = document.getElementById("include_special_character").checked;

  if (isNaN(length) || length < 4 || length > 128) {
    showToast("Informe um tamanho entre 4 e 128.", "danger");
    return;
  }

  if (!includeUpper && !includeLower && !includeNumber && !includeSpecial) {
    showToast("Selecione pelo menos um tipo de caractere.", "danger");
    return;
  }

  const password = generatePassword(length, includeUpper, includeLower, includeNumber, includeSpecial);

  passwordText.textContent = password;
  passwordContainer.classList.add("show");
});

copyBtn.addEventListener("click", () => {
  if (!passwordText.textContent) {
    showToast("Nenhuma senha para copiar!", "danger");
    return;
  }

  navigator.clipboard.writeText(passwordText.textContent)
    .then(() => showToast("Senha copiada!", "success"))
    .catch(() => showToast("Erro ao copiar!", "danger"));
});

function generatePassword(length, upper, lower, number, special) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

  let charSet = "";
  if (upper) charSet += upperChars;
  if (lower) charSet += lowerChars;
  if (number) charSet += numberChars;
  if (special) charSet += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}

function showToast(message, status) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: status === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff5f6d, #ffc371)"
    }
  }).showToast();
}
