//CREAR FUNCIONES PESO PLANETA
var peso = parseFloat(prompt("Ingresa tu peso"));
pesoPlaneta();

function pesoPlaneta(){
    var marte=3.71, mercurio=3.7, jupiter=24.79, venus=8.87, saturno = 9.05, Urano = 7.77; Neptuno = 11, pluton = 0.4;
    var tierraG = 9.78;

    var martePeso = (peso/tierraG) * marte;
    var mercurioPeso = (peso/tierraG) * mercurio;
    var jupiterPeso = (peso/tierraG) * jupiter;
    var venusPeso = (peso/tierraG) * venus;
    var saturnoPeso = (peso/tierraG) * saturno;
    var uranoPeso = (peso/tierraG) * Urano;
    var neptunoPeso = (peso/tierraG) * Neptuno;
    var plutonPeso = (peso/tierraG) * plutonPeso;

    alert("Tu peso en Marte es: "+ martePeso.toFixed(2) + "\n"+ 
          "Tu peso en Mercurio es: " + jupiterPeso.toFixed(2) + "\n" +
          "Tu peso en Jupiter es: " + mercurioPeso.toFixed(2) + "\n" +
          "Tu peso en Venus es: "+ venusPeso.toFixed(2) + "\n" +
          "Tu peso en Saturno es: " + saturnoPeso.toFixed(2) + "\n" +
          "Tu peso en Urano es: " + uranoPeso.toFixed(2) + "\n" +
          "Tu peso en Neptuno es: " +neptunoPeso.toFixed(2) + "\n" +
          "Tu peso en Pluton es: " + plutonPeso.toFixed(2));

}
