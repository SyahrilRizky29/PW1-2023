function login_berhasil() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username === "ariel@gmail.com" && password === "JagoCoding") {
      window.location.href = "berhasil.html";
      alert("Login berhasil. Silahkan klik ok!")
    } else {
      alert("Login gagal. Silahkan coba lagi!");
    }
  }