function izracunaj() {
  const brojMeseci = Number(document.getElementById("brojMeseci").value);
  const cenaMesecno = Number(document.getElementById("cenaMesecno").value);
  const noviVezbaci = Number(document.getElementById("noviVezbaci").value);
  const meseciClanstva = Number(document.getElementById("meseciClanstva").value);
  const brojTreninga = Number(document.getElementById("brojTreninga").value);

  let ukupnaCenaPrePopusta = brojMeseci * cenaMesecno;
  let ukupniPopust = 0;


  if (noviVezbaci >= 4) {
    ukupniPopust = 100;
  } else if (noviVezbaci >= 2) {
    ukupniPopust += 50;
  }

  
  if (ukupniPopust < 100) {
    let lojalnostPopust = Math.min(meseciClanstva, 6) * 0.5;
    ukupniPopust += lojalnostPopust;

    
    if (brojTreninga >= 20) {
      ukupniPopust += 10;
    } else if (brojTreninga >= 15) {
      ukupniPopust += 5;
    }

    
    ukupniPopust = Math.min(ukupniPopust, 100);
  }

  let konacnaCena = ukupnaCenaPrePopusta * (1 - ukupniPopust / 100);

  document.getElementById("rezultat").innerHTML = `
    <p>💸 Укупна цена пре попуста: <strong>${ukupnaCenaPrePopusta.toFixed(2)} RSD</strong></p>
    <p>📉 Укупни попуст: <strong>${ukupniPopust.toFixed(1)}%</strong></p>
    <p>✅ Коначна цена за плаћање: <strong>${konacnaCena.toFixed(2)} RSD</strong></p>
  `;
}
