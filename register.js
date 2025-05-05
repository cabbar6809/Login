function register() {
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  if (!fullName || !email || !password || !confirmPassword) {
    message.textContent = "Zəhmət olmasa bütün xanaları doldurun.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Şifrələr uyğun gəlmir.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Qeydiyyat uğurla tamamlandı!";
  message.style.color = "green";
}
