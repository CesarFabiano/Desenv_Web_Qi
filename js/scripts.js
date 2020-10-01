//Declaração de variáveis

//TIPO NOME VALOR

/*var nr1 = 5;
var nr2 = 6;
var nr3 = 7;
var media;
//A variável media recebe:
media = (nr1 + nr2 + nr3) / 3; 
alert(media);

var nome = "Cesar";

alert(nome);*/

// Function em JavaScript

// Somar dois números(valores fixos)

function somar1() {
	var nr1 = 5;
	var nr2 = 3;
	var soma = nr1 + nr2;

	alert(soma);
}
function somar2() {
	var nr1;
	var nr2;
	var soma;

	nr1 = parseInt(prompt("Informe o primeiro valor."));
	nr2 = parseInt(prompt("Informe o segundo valor."));
	/*nr1 = parseInt(nr1);
	nr2 = parseInt(nr2);*/

	soma = nr1 + nr2;

	alert("Resultado: " + soma)
}
function mostrarTexto() {
	var texto;

	texto = document.getElementById('texto').value;
	alert(texto);
}
function mostrarNome(nome) {
	alert("Nome: " + nome.value);
}
function popupGoogle(){
    window.open('https://www.google.com',
    'JANELA', 'width=800, height=600');
}

//Verifica a Hora e a Data

function verDataHora() {
	document.getElementById('dataHora').innerHTML = Date();
}
function mudarTexto() {
	document.getElementById('p1').innerHTML = "Mudou viu ?";
}
function mudarParagrafo() {
	var paragrafo = document.getElementById('px');
	console.log("conteúdo de Paragrafo: " + px);

	paragrafo = px.innerHTML;
	console.log("conteúdo de Paragrafo: " + px);


	var div = document.getElementById('div');
	console.log("conteúdo de Div: " + div);

	document.getElementById('div').innerText = "Novo <br> Texto";
	document.getElementById('div').innerHTML = "Novo <br> Texto";
}
function mudarImagen() {
	var imagem = document.getElementById('p2');
	imagem.src = "img/laranja.jpg";
}
function mudarBorda() {
	var cor = document.getElementById('p3');
	cor.style.borderColor = "#232323";
	cor.style.borderStyle = "solid";
	cor.style.borderWidth = "5px";
}