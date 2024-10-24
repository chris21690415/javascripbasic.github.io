function myFunction() {
  document.getElementById('demo3').style.fontSize='35px';
  document.getElementById("demo3").innerHTML = "cambio con Js Externo a color Rojo y a 35px";
  document.getElementById("demo3").style.color = "red";
}
function aumentar() {
  document.getElementById('demo2').style.fontSize='35px';
  document.getElementById('demo2').style.color = 'red';
}
function cambiarimagen() {
  const imagen = document.getElementById("myImage2");
  imagen.src = (imagen.src.endsWith("atras.jpeg")) ? 'frente.jpeg' : 'atras.jpeg';
}