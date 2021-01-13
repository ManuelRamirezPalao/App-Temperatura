 $(document).ready(function() {
    $('select').material_select();
  });


function calcular(){

document.getElementById('Resultado').innerHTML=""

var temperatura=document.getElementById('temperatura').value
temperatura = parseInt(temperatura)
console.log(typeof(temperatura))
console.log(temperatura)
escala_inicial = document.getElementById('Ti').value 
console.log(escala_inicial)
escala_final = document.getElementById('Tf').value
console.log(escala_final)


if(escala_inicial =='Kelvin' && escala_final == 'Celsius'){
var resultado = kelvin_celsius(temperatura)
resultado = resultado.toFixed(2)
console.log(resultado)
imprimir(escala_final,resultado)
   
 } 
 if(escala_inicial==escala_final){
  document.getElementById('Resultado').innerHTML+="<p> Ingrese escalas validas </p>"
   
 }   
if(escala_inicial =='Kelvin' && escala_final == 'Farenheit'){
	resultado = kelvin_celsius(temperatura)
	var resultado = farenheit(resultado)
	resultado = resultado.toFixed(2)
	imprimir(escala_final,resultado)
}
if(escala_inicial =='Celsius' && escala_final == 'Farenheit'){
	var resultado = farenheit(temperatura)
	resultado = resultado.toFixed(2)
	imprimir(escala_final,resultado)


}
if(escala_inicial =='Celsius' && escala_final == 'Kelvin'){
	var resultado = kelvin(temperatura)
	resultado = resultado.toFixed(2)
	imprimir(escala_final,resultado)


}
if(escala_inicial =='Farenheit' && escala_final == 'Celsius'){
	var resultado = celsius(temperatura)
	resultado = resultado.toFixed(2)
	imprimir(escala_final,resultado)


}
if(escala_inicial =='Farenheit' && escala_final == 'Kelvin'){
	var resultado = celsius(temperatura)
	resultado = kelvin(resultado)
	resultado = resultado.toFixed(2)
	imprimir(escala_final,resultado)


}


}

function farenheit(valor){
var temperatura_final = 9/5*valor + 32
return temperatura_final
}
function celsius(valor){
 
 temperatura_final = 5/9*(valor-32)
	return temperatura_final 
}
function kelvin(valor){
 	console.log(valor)
	 var temperatura_final = valor + 273.15
	return temperatura_final 
}
function kelvin_celsius(temperatura){
 console.log(temperatura)
 var temperatura_final = temperatura - 273.15
	return temperatura_final
}
function imprimir(escala_final,resultado){
	document.getElementById('Resultado').innerHTML+= `
    <p> La temperatura en ${escala_final} es de ${resultado}   </p>
    `
}