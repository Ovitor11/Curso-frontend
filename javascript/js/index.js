var nota1 = 7.5;
var nota2 = 8.0;
var nota3 = 7.5;
var nota4 = 9.0;
var media =(nota1 + nota2 + nota3 + nota4) / 4 ;
if (media >= 7.5) {
console.log("o aluno foi aprovado")
} else {
    console.log("o aluno foi reprovado")
};

var km;
var revisao = 4;
for (km = 0; km < revisao; km++) {
console.log("Apenas " + km + " km, falta pouco para a revisão");
};


var alunos = [
  [9, 9, 6, 8],
  [5, 8, 3, 5],
  [8, 7, 6, 4],
  [9, 8, 9, 4]]

var nota = 0;

for (var i = 0; i < alunos.length; i++) {
  nota = 0
  notasAluno = alunos[i];
  console.log("Aluno: " + parseInt(i+1))
  console.log("notas: " + notasAluno)

  for (var c = 0; c < notasAluno.length; c++){
    nota += notasAluno[c];
  }
  
  media = nota / 4;

  if (media >=7.5){
    var resultado = " Aluno Aprovado" ;
  } else {
    var resultado = "Aluno Reprovado" ;
  }
  
  console.log("A media é : " + media+ " - " + resultado);
}

var contador = 0;
while (contador < 10) {
 contador++
}

var hora = 24;
while (hora > 0) {
    hora--;
    console.log("Faltam " + hora + " horas para o dia acabar");
}

do {

} while () ;


function calculoMedia( notas ) {

    var soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c];
    }
    
    media = soma / notas.length

    return media;
}
console.log("Média: " + calculoMedia([9, 9, 6, 8]));

