function carregar() {
  var msg = window.document.getElementById("msg");
  var foto = window.document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  msg.innerText = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    window.document.body.style.background = '#e2cd9f';
    foto.src = "manha.jpg";
  } else if (hora >= 12 && hora < 18) {
    window.document.body.style.background = '#b9846f';
    foto.src = "tarde.jpg";
  } else {
    window.document.body.style.background = '#515154';
    foto.src = "noite.jpg";
  }
}

