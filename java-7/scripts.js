let planeta = prompt("Какая планета?");
let radius = prompt("Радиус планеты?");

if (planeta == "Юпитер" && radius == 69911) {
    console.log("Yes");
}

else {
    console.log("No");
}



let answer2 = prompt("В чем измеряется дистанция?")

if (answer2 == "м" || answer2 == "км" || answer2 == "см" || answer2 == "мм") {
    console.log("Да!")
}
if (answer2 != "метр") {
    console.log("Нет!")
} 
else {
   console.log("No");
}




// if (planeta == "Меркурий" && radius == 2439,7 + " км") {
//     console.log("Yes");
// } 
// if (planeta == "Венера" && radius == 6051,8 + " км") {
//     console.log("Yes");
// } 
// if (planeta == "Земля" && radius == 6371 + " км") {
//     console.log("Yes");
// } 