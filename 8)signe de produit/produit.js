document.addEventListener("DOMContentLoaded", function() {
    var number1 = -64;
    var number2 = -455;
    var resultElement = document.getElementById('result');
    if (number1 < 0 && number2 < 0) {
        resultElement.textContent = "Le produit de " + number1 + " et " + number2 + " est: positif";
    } else if (number1 > 0 && number2 > 0) {
        resultElement.textContent = "Le produit de " + number1 + " et " + number2 + " est: positif";
    } else {
        resultElement.textContent = "Le produit de " + number1 + " et " + number2 + " est: négatif";
    }
});