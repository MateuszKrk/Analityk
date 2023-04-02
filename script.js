// Pobranie roku od użytkownika
var rok = prompt("Podaj rok (4 cyfry):");

// Wygenerowanie daty urodzenia losowej osoby w podanym roku
var dzien = Math.floor(Math.random() * 31) + 1;
var miesiac = Math.floor(Math.random() * 12) + 1;
var rokUrodzenia = rok.substring(2, 4) + rok.substring(0, 2);

// Wygenerowanie cyfry kontrolnej
var wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
var suma = 0;

for (var i = 0; i < 11; i++) {
  var cyfra = Math.floor(Math.random() * 10);
  suma += cyfra * wagi[i];
}

var cyfraKontrolna = (10 - suma % 10) % 10;

// Wyświetlenie numeru PESEL na stronie
var pesel = rokUrodzenia + ("0" + miesiac).slice(-2) + ("0" + dzien).slice(-2) + cyfraKontrolna;
document.write("Wygenerowany numer PESEL: " + pesel);
