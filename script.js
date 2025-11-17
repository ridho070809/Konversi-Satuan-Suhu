function convertTemp() {
 let val = parseFloat(document.getElementById("valueInput").value);
 let from = document.getElementById("fromUnit").value;
 let to = document.getElementById("toUnit").value;
 let resultBox = document.getElementById("resultBox");


if (isNaN(val)) {
 resultBox.innerHTML = "❌ Input tidak valid! Masukkan angka yang benar.";
 return;
 }


let celsius;
 switch (from) {
 case "C": celsius = val;
 break;
 case "K": celsius = val - 273.15;
 break;
 case "F": celsius = (val - 32) * 5/9;
 break;
 case "R": celsius = val * 5/4;
 break;
 }


let result;
 switch (to) {
 case "C": result = celsius;
 break;
 case "K": result = celsius + 273.15;
 break;
 case "F": result = (celsius * 9/5) + 32; break;
 case "R": result = celsius * 4/5; break;
 }


resultBox.innerHTML = "Hasil: " + result.toFixed(3) + " " + to; 
}


function resetAll() {
 document.getElementById("valueInput").value = "";
 document.getElementById("resultBox").innerHTML = "Hasil konversi akan muncul di sini.";
 }
