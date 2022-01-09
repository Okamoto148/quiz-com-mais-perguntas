function quiz() {
    const resultado = document.getElementById('resultado');
    var soma = document.querySelector('input[name="flexRadioDefault"]:checked').value;

if (soma==1){
result1 = 0;
resultado.textContent = `Resposta errada. A fervura elimina os microrganismos, no entanto não acaba com a maioria das toxinas produzidas por estes`;}else{
result1 = 1;
resultado.textContent = `Você acertou!`;
}
}

function quiz2() {
    const resultado2 = document.getElementById('resultado2');
    var soma2 = document.querySelector('input[name="pergunta2"]:checked').value;

if (soma2==2){
result2 = 0;
resultado2.textContent = `Resposta errada. Os alimentos secos, por não terem água que é essencial para os microrganismos se multiplicarem, tem uma validade muito maior.`;}else{
result2 = 1;
resultado2.textContent = `Você acertou!`;
}
}

function quiz3() {
    const resultado3 = document.getElementById('resultado3');
    var soma3 = document.querySelector('input[name="pergunta3"]:checked').value;

if (soma3==1){
result3 = 0;
resultado3.textContent = `Resposta errada. Os alimentos, após o cozimento, tem uma validade de cerca de uma hora em temperatura ambiente. Guarde, assim que possível, na geladeira e esquente novamente antes de comer.`;}else{
result3 = 1;
resultado3.textContent = `Você acertou!`;
}
}

function resultadofinal(){
resultadofinal1.textContent = `Você acertou ${result1+result2+result3} de 3`;
}