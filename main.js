document.getElementById("data-control").addEventListener("click", function (event) {
    event.preventDefault();

    // Nome
    let push = document.getElementById("control-name").value;
    document.getElementById("result-name").innerText = push;
    
    // Dati da elaborare
    const kmPercorrere = Number(document.getElementById("control-km").value);
    const etàPasseggero = document.getElementById("control-age").value;

    let costoKm = kmPercorrere * 0.21;

    if (etàPasseggero === "tariffa-young") {
        costoKm = costoKm * 0.8; // sconto 20%
    } else if (etàPasseggero === "tariffa-anziani") {
        costoKm = costoKm * 0.6; // sconto 40%
    }

    costoKm = costoKm.toFixed(2);
    document.getElementById("result-pay").innerText = (costoKm + " €");
});
