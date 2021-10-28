var titulo = document.querySelector("h1");
titulo.textContent = "Banana";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if(peso < 0){
  console.log("Peso inválido");
}

if(peso > 1000){
  console.log("Peso inválido");
}
var imc = peso / (altura * altura);
tdImc.textContent = imc;
