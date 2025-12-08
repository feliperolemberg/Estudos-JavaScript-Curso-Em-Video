function tabuada() {
  var numero = window.document.getElementById('txtn').value;
  var areaTabuada = window.document.getElementById('seltab');
  if (numero.length == 0) {
    window.alert('Por favor, digite um número!');
  } else {
    numero = Number(numero);
    var c = 1;
    areaTabuada.innerHTML = '';
    while (c <= 10) {
      var item = document.createElement('option');
      item.textContent = `${numero} x ${c} = ${numero*c}`;
      areaTabuada.appendChild(item);
      c++;
    }
  }
}