function listar() {
  // paragrafoResposta.innerHTML = "";
  var numeroInicio = Number(window.document.getElementById('txtInicio').value);
  var numeroFim = Number(window.document.getElementById('txtFim').value);
  var numeroPulo = Number(window.document.getElementById('txtPulo').value);
  var paragrafoResposta = window.document.getElementById('resultado');
  if (window.document.getElementById('txtInicio').value.length == 0 || window.document.getElementById('txtFim').value.length == 0 || window.document.getElementById('txtPulo').value.length == 0) {
    paragrafoResposta.innerHTML = `Impossível contar.`;
    window.alert(`[Erro] Faltam dados!`);
  } else {
    paragrafoResposta.innerHTML = `Contando...<br>`;
    if (numeroPulo == 0 ) {
      window.alert(`Passo inválido! Consideraremos passo 1.`);
      numeroPulo = 1;
    }
    // Contagem crescente
    if (numeroInicio < numeroFim) {
      for (var i = numeroInicio; i <= numeroFim; i += numeroPulo) {
        paragrafoResposta.innerHTML += `${i} &#x1F449; `;
      }
      paragrafoResposta.innerHTML += `&#x1F3C1;`;
    } else if (numeroInicio == numeroFim) {
        paragrafoResposta.innerHTML += `O início e o final são iguais! Tente novamente.`;
    } else { // Contagem decrescente
        for (var i = numeroInicio; i >= numeroFim; i -= numeroPulo) {
          paragrafoResposta.innerHTML += `${i} &#x1F449; `;
        }
        paragrafoResposta.innerHTML += `&#x1F3C1`;
    }
  }
}