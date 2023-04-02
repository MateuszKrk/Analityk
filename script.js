function generujPesel() {
    var rok = document.getElementById("rok").value;
    var miesiac = Math.floor(Math.random() * 12) + 1;
    var dzien = Math.floor(Math.random() * 31) + 1;
    var seria = Math.floor(Math.random() * 999) + 1;
    var kontrola = 0;
  
    if (rok >= 1900 && rok <= 1999) {
      miesiac += 80;
    } else if (rok >= 2000 && rok <= 2099) {
      miesiac += 20;
    } else if (rok >= 2100 && rok <= 2199) {
      miesiac += 40;
    } else if (rok >= 2200 && rok <= 2299) {
      miesiac += 60;
    }
  
    var pesel = rok.toString().substring(2) + miesiac.toString().padStart(2, "0") + dzien.toString().padStart(2, "0") + seria.toString().padStart(3, "0");
  
    for (var i = 0; i < pesel.length; i++) {
      var waga = [1, 3, 7, 9];
      kontrola += parseInt(pesel.charAt(i)) * waga[i % 4];
    }
  
    kontrola = (10 - (kontrola % 10)) % 10;
    pesel += kontrola;
  
    alert("Wygenerowany numer PESEL: " + pesel);
  }
  