lista = [
  { login: "maria2020@gmail.com", senha: "caixa" },
  { login: "joanaj@gmail.com", senha: "computador" },
  { login: "harrystyles@gmail.com", senha: "casa" },
];

function logar() {
  x = lista.find((e) => {
    if (field_email.value == e.login && field_password.value == e.senha)
      window.location.href = "https://github.com/LucimaraSouzah";
  });
  if (x == undefined) {
    alert("Login failed.");
  }
}
