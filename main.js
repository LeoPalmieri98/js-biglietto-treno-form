document.getElementById("data-control").addEventListener("click", function () {
    let push = document.getElementById("control-name").value;
    console.log(push);
    document.getElementById("result-name").innerText = push;
   
   
   
   
   
    let pushKm = document.getElementById("control-km").value;
    console.log(pushKm);
});


//Dati da elaborare
//const kmPercorrere = Number(km);
//const etàPasseggero = Number(età);

//let costoKm = kmPercorrere * 0.21;
//if (etàPasseggero < 18) {
//costoKm = costoKm * 0.8; //sconto 20%
//}
//else if(etàPasseggero > 65) {
//costoKm = costoKm * 0.6; //sconto 40%
//}

//costoKm = costoKm.toFixed(2); //Arrotondare in decimali

//alert("Il prezzo del tuo biglietto è: € " + costoKm); //Costo del Biglietto!