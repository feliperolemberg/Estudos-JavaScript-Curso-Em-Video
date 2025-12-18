var valorDigitado = window.document.getElementById('txtNum');
var lista = [];
var listaSelect = window.document.getElementById('txtListaSelect');
var divResultado = window.document.querySelector('div#areaResultado');

function adicionar() {
  if (valorDigitado.value === "") {
    window.alert("A caixa está vazia! Tente novamente.");
  } else if (Number(valorDigitado.value) < 1 || Number(valorDigitado.value) > 100) {
    window.alert("O número não está no intervalo correto! Tente novamente.");
  } else if (lista.indexOf(Number(valorDigitado.value)) != -1){
    window.alert(`O número ${Number(valorDigitado.value)} já está na lista! Tente outro número.`)
  } else {
    lista.push(Number(valorDigitado.value));
    var item = document.createElement('option');
    item.textContent = `O valor ${Number(valorDigitado.value)} foi adicionado.`;
    listaSelect.appendChild(item);
    divResultado.innerHTML = '';
  }
  valorDigitado.value = '';
  valorDigitado.focus(); // Estabelecer a posição do cursor após a finalização da função ("Em uma tag input do tipo number")
}

function finalizar() {
  if (lista.length == 0) {
    window.alert(`Adicione valores antes de finalizar!`);
  } else {
    var totalElementosLista = lista.length;
    var maior = lista[0];
    var menor = lista[0];
    var soma = 0;
    var media = 0;
    for (var posicao in lista) {
      soma += lista[posicao];
      if (lista[posicao] > maior) {
        maior = lista[posicao];
      }
      if (lista[posicao] < menor) {
        menor = lista[posicao];
      }
    }
    media = soma / totalElementosLista;
    divResultado.innerHTML = '';
    divResultado.innerHTML += `<p>Ao todo temos ${totalElementosLista} números cadastrados.</p>`;
    divResultado.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`;
    divResultado.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`;
    divResultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    divResultado.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`;
  }
}