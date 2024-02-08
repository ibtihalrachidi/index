document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var age = parseInt(document.getElementById('age').value);
    var resultElement = document.getElementById('result');
    if (age <= 13) {
        resultElement.textContent = "Film recommandé : Lilo & Stitch";
    } else if (age > 13 && age < 18) {
        resultElement.textContent = "Film recommandé : Matrix";
    } else {
        resultElement.textContent = "Film recommandé : Evil Dead";
    }
});