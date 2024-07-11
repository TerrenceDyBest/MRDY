function validateForm() {
    var phoneModel = document.getElementById("phone-model").value;
    var quantity = document.getElementById("quantity").value;

    if (phoneModel === "") {
        alert("Please select a phone model.");
        return false;
    }

    if (quantity <= 0) {
        alert("Quantity must be at least 1.");
        return false;
    }

    return true;
}
