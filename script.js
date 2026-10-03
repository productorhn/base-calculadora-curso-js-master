//esto agrega el valor a la pantalla del boton seleccionado
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}
//esto borra el valor de la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}
//esto calcula el valor de la pantalla y lo muestra en la misma
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado


}