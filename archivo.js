
pesoPlaneta();

function masa(){

  var tierra = 9.80;
  var masaTierra = peso/tierra;
  return masaTierra.toFixed(2);
}

function pesoPlaneta(){
  var mercurio =3.70 * masa();
  var venus = 8.87 * masa();
  var marte = 3.71 * masa();
  var jupiter = 23.12 * masa();
  var saturno = 8.96 * masa();
  var urano = 8.69 * masa();
  var neptuno = 11 * masa();
  var pluton = 0.81 * masa();
alert ("Tu peso en el planeta Mercurio es : "+ mercurio.toFixed(2) + "\n" +
        "Tu peso en el planeta Venus es : " + venus.toFixed(2) + "\n" +
        "Tu peso en el planeta Marte es : " + marte.toFixed(2) + "\n" +
        "Tu peso en el planeta Jupiter es : " + jupiter.toFixed(2) + "\n" +
        "Tu peso en el planeta Saturno es : " + saturno.toFixed(2) + "\n" +
        "Tu peso en el planeta Urano es : " + urano.toFixed(2) + "\n" +
        "Tu peso en el planeta Neptuno es : " + neptuno.toFixed(2) + "\n" +
        "Tu peso en el planeta Pluton es : " + pluton.toFixed(2) + "\n"
      );

}
