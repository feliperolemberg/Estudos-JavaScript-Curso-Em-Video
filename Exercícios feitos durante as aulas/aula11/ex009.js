function verificar() {
  var pais = window.document.getElementById("txtcaixa").value;
  var area = window.document.getElementById("area");
  if (pais == "Brasil") {
    area.innerHTML = `<p>Você é <strong>brasileiro</strong>!</p>`;
  }
  else {
    area.innerHTML = `<p>Você é <strong>estrangeiro</strong>!</p>`;
  }
}