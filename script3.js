let gattiTotali = 44;
let gattiFila = 6;
let fileRisultanti = Math.round(gattiTotali / gattiFila);
console.log(fileRisultanti);
let resto = gattiTotali % fileRisultanti;
let gattiMancanti = gattiFila - resto;
console.log(resto);
console.log(gattiMancanti);
console.log(`Ci sono ${fileRisultanti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${resto}`);