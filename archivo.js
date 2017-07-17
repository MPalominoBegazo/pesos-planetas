//CREAR FUNCIONES
var peso = parseFloat(prompt("Ingresa tu peso"));
pesoPlaneta();

function pesoPlaneta(){
    var marte=3.71, mercurio=3.7, jupiter=24.79, venus=8.87;
    var tierraG = 9.78;

    var martePeso = (peso/tierraG) * marte;
    var mercurioPeso = (peso/tierraG) * mercurio;
    var jupiterPeso = (peso/tierraG) * jupiter;
    var venusPeso = (peso/tierraG) * venus;

    alert("Tu peso en Marte es: "+ martePeso.toFixed(2) + "\n"+ 
          "Tu peso en Mercurio es: " + jupiterPeso.toFixed(2) + "\n" +
          "Tu peso en Jupiter es: " + mercurioPeso.toFixed(2) + "\n" +
          "Tu peso en Venus es: "+ venusPeso.toFixed(2) );

}
