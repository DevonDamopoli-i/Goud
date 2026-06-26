let passagiers = [
{
 id: 163821,
naam: "Leo Daams",
saldo: 34,
woonplaats: "Den Bosch",
telefoonnummer: "06-12345678"
  },
 {
id: 145032,
naam: "Nicole Hops",
saldo: 18,
woonplaats: "Maastricht",
telefoonnummer: "06-87654321"
}
];

function toonPassagiers() {
console.log("\n--- OV-Passagierslijst ---");
passagiers.forEach(p => {
console.log(`[${p.id}] ${p.naam} | Saldo: €${p.saldo} | ${p.woonplaats} | ${p.telefoonnummer}`);
});
}

function voegToe(id, naam, saldo, woonplaats, telefoonnummer) {
  passagiers.push({ id, naam, saldo, woonplaats, telefoonnummer });
  console.log(`\nNieuwe passagier toegevoegd: ${naam}`);
}

function checkIn(id, ritKosten) {
const passagier = passagiers.find(p => p.id === id);
 if (!passagier) return console.log("Passagier niet gevonden.");
 if (passagier.saldo < ritKosten) return console.log(`❌ Onvoldoende saldo voor ${passagier.naam}.`);
 passagier.saldo -= ritKosten;
console.log(`\n${passagier.naam} ingecheckt. Saldo: €${passagier.saldo}`);
}

function checkUit(id, terug = 0) {
const passagier = passagiers.find(p => p.id === id);
if (!passagier) return console.log("Passagier niet gevonden.");
passagier.saldo += terug;
 console.log(`\n${passagier.naam} uitgecheckt. Saldo: €${passagier.saldo}`);
}

function verwijder(id) {
const index = passagiers.findIndex(p => p.id === id);
if (index === -1) return console.log("Passagier niet gevonden.");
const naam = passagiers[index].naam;
passagiers.splice(index, 1);
console.log(`\nOV-kaart van ${naam} opgezegd.`);
}

toonPassagiers();
voegToe(298401, "Sanne Brouwer", 25, "Eindhoven", "06-11223344");
toonPassagiers();
checkIn(163821, 4);
checkUit(163821, 0);
toonPassagiers();
verwijder(145032);
toonPassagiers();