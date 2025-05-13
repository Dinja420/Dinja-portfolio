let igrac1 = [];
let igrac2 = [];

function sveKarte() {
  return [...igrac1, ...igrac2];
}

function dodajKartu(igrac) {
  const broj = document.getElementById("broj").value;
  const znak = document.getElementById("znak").value;

  if (broj === "" || znak === "") {
    alert("Izaberi broj i znak karte!");
    return;
  }

  const karta = broj + znak;


  if (sveKarte().includes(karta)) {
    alert("Ova karta je već izabrana! Izaberi drugu.");
    return;
  }

  if (igrac === 1) {
    igrac1.push(karta);
  } else {
    igrac2.push(karta);
  }

  document.getElementById("broj").value = "";
  document.getElementById("znak").value = "";
}

function vrednostKarte(broj) {
  const mapa = {
    "A": 14, "K": 13, "Q": 12, "J": 11,
    "10": 10, "9": 9, "8": 8, "7": 7,
    "6": 6, "5": 5, "4": 4, "3": 3, "2": 2
  };
  return mapa[broj];
}

function prikaziPobednika() {
  const rezultat = document.getElementById("rezultat");

  if (igrac1.length === 0 || igrac2.length === 0) {
    rezultat.innerHTML = "Oba igrača moraju imati bar jednu kartu!";
    return;
  }

  const poslednja1 = igrac1[igrac1.length - 1];
  const poslednja2 = igrac2[igrac2.length - 1];

  const broj1 = poslednja1.slice(0, -1);
  const broj2 = poslednja2.slice(0, -1);

  const vred1 = vrednostKarte(broj1);
  const vred2 = vrednostKarte(broj2);

  let ishod = "";

  if (vred1 > vred2) {
    ishod = "🏆 Pobednik je Igrač 1!";
  } else if (vred2 > vred1) {
    ishod = "🏆 Pobednik je Igrač 2!";
  } else {
    ishod = "Nerešeno – oba igrača imaju istu kombinaciju.";
  }

  rezultat.innerHTML = `
    <p>Igrač 1: ${igrac1.join(", ")}</p>
    <p>Igrač 2: ${igrac2.join(", ")}</p>
    <hr>
    <p>${ishod}</p>
  `;

  igrac1 = [];
  igrac2 = [];
}
