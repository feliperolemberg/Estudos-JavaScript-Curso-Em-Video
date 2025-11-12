function verificar() {
  var agora = new Date();
  var ano = agora.getFullYear();
  var fAno = document.getElementById('txtano');
  var resultado = document.querySelector('div#resultado');

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fSex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fSex[0].checked) {
      genero = 'homem';
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'imagens/homem-bebe.jpg');
      } else if (idade < 24) {
        img.setAttribute('src', 'imagens/homem-jovem.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/homem-adulto.jpg');
      } else {
        img.setAttribute('src', 'imagens/homem-idoso.png');
      }
    } else {
      genero = 'mulher';
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'imagens/mulher-bebe.jpg');
      } else if (idade < 24) {
        img.setAttribute('src', 'imagens/mulher-jovem.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/mulher-adulta.jpg');
      } else {
        img.setAttribute('src', 'imagens/mulher-idosa.png');
      }
    }

    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`;
    resultado.appendChild(img);
  }

}