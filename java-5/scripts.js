let answer = prompt("The capital of which state is Bishkek?");

if (answer == "Kyrgyztsan" || answer == "Kirgiziya" || answer == "KR") {
    console.log("Yes!")
}
if (answer != "Kyrgyztsan") {
    console.log("No!")
}

let answer1 = prompt("How the temperature is measured?")

if (answer1 == "Celsius" || answer1 == "gradus" || answer1 == "kelvin") {
    console.log("Yes!")
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

let answer3 = prompt("В чем измеряется вес?")

if (answer3 == "килограмм") {
    console.log("Да!")
}
if (answer3 != "килограмм") {
    console.log("Нет!")
}






let unit = prompt("What unit?");
let temperature = prompt("What temperature?");

if (unit == "C") {
    if (temperature == 0) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

else if (unit == "K") {
    if (temperature == 273) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

else if (unit == "F") {
    if (temperature == 32) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
else {
    console.log("Please use only C, F or K as a unit");
}

// && - и
// || - или 

let  sound = prompt("What sound?");
let  speed = prompt("What speed?");

if (mill == "sound" && speed == 343) {
    console.log("Yes");
}
else {
    console.log("No");
}

// let answer4 = prompt("На каком языке ты хочешь узнать слово Новый год?");

// switch (answer4) {
//     case "English":
//     case "England":
//         console.log("New Year");
//         break;

//     case "Киргизия":
//     case "КР":
//         console.log("Жаны Жыл");
//         break;

//     default:
//         console.log("Не знаю");
//         break;
// }