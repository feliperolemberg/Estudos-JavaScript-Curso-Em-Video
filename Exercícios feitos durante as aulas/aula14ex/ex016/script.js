var paragrafoResposta = document.createElement('p');
document.getElementById('caixaPrincipal').appendChild(paragrafoResposta);

function listar() {
  paragrafoResposta.innerHTML = "";
  var numeroInicio = Number(window.document.getElementById('txtInicio').value);
  var numeroFim = Number(window.document.getElementById('txtFim').value);
  var numeroPulo = Number(window.document.getElementById('txtPulo').value);
  for (numeroInicio; numeroInicio <= numeroFim; numeroInicio += numeroPulo) {
    paragrafoResposta.innerHTML += `${numeroInicio}&#x1F449;`;
  }
}