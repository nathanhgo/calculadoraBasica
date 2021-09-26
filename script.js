var text = document.getElementById('text')

function clicou(par) {
  if (
    text.innerHTML == '' ||
    text.innerHTML[text.innerHTML.length - 1] == '/' ||
    text.innerHTML[text.innerHTML.length - 1] == 'x' ||
    text.innerHTML[text.innerHTML.length - 1] == '+' ||
    text.innerHTML[text.innerHTML.length - 1] == '-' ||
    text.innerHTML[text.innerHTML.length - 1] == '='
  ) {
    // se o primeiro dígito é um símbolo, desconsidere
    if (par == '/' || par == 'x' || par == '+' || par == '-' || par == '=') {
      par = ''
    }
  }

  if (par != '=') {
    //Se o botão apertado (parâmetro) não for '='
    if (par == 'x') {
      par = '*'
    }
    text.innerHTML += par
  } else {
    var res = eval(text.innerHTML)
    text.innerHTML = ''
    text.innerHTML += res //mostrar resultado
  }
}

function reset() {
  text.innerHTML = ''
}

function removerUltimo() {
  textoModificado = text.value.slice(0, -1)
  text.innerHTML = textoModificado
}
