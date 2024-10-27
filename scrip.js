//agrego la variable fecha, con una nueva opciones llamada date, esto lo que hace es darme la fecha y hora actual
let fecha = new Date();
//agrego la variable hora, con una opcion llamada gethours que nos da la hora actual en formato 24 horas
let hora = fecha.getHours();

//creo la variable saludo
let saludo;

//creo los condicionales 
if (hora >=6 && hora >12){
    saludo ="buenos dias!";
} else if (hora >=12 && hora <18) {
    saludo = "buenas tardes!";
} else {
    saludo = "buenas noches!"
}

document.write (saludo);


