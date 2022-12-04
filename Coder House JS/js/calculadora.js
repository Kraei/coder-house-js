//Vamos a ver en que año naciste y si eres mayor de edad

const date = new Date;
const newDate = (date.getFullYear());
console.log(newDate);
const year = parseInt(prompt('¿En qué año naciste?'));
//const year = 1500;
let age = newDate-year;
console.log(age);

while (age > 12 && age < 99) {
    alert('la edad es sólo un número y el tuyo es: ' + age + ' no lo tomes tan en serio!')
    break;
}

if (age < 2 || age > 150) {
    alert('¿Me estás tomando el pelo?');
} else if (age > 2 && age < 5) {
    alert('No hay nada malo, pero como que algo no me cuadra')
} else if (age < 5) {
    alert('eres muy jóven para usar internet');
} else if (age > 11 && age < 18) {
    alert ('Cerca, pero no tanto'); 
} else if (age > 18 && age < 35) {
    alert ('Es tu momento, no la vayas a regar');
} else if (age > 35 && age < 45) {
    alert ('No te preocupes, de los errores se aprende. Es tu momento!');
} else if (age > 45 && age < 60) {
    alert ('Sigue adelante, ya la regaste, ya ni modo.');
} else if (age > 60 && age < 80) {
    alert ('bueeeno, al menos tienes salud');
} else if (age > 80 && age < 150) {
    alert ('Tú me sorprendes 0.0, eres muy viejo');
}
else {
    alert('Por favor ingresa un número válido, sabré si haces trampa');
    alert ('Te doy otra oportunidad, pero sin trampas');
    location.reload();
}
