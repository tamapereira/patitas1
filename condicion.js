let hora = prompt("¿Que hora es en tu pais?");

if (hora>= 6 && hora<= 12) {
    alert("Buen dia! Gracias por visitarnos");
}
else if (hora>= 13 && hora<= 18) {
    alert("Buenas tardes! Gracias por visitarnos");
}

else {
    alert("Buenas noches! Gracias por visitarnos");
}