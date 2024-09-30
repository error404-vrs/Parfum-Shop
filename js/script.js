function toggleDetails() {
    const detailsDiv = document.getElementById("additionalDetails");
    detailsDiv.classList.toggle("hidden");
    detailsDiv.style.opacity = detailsDiv.classList.contains("hidden") ? "0" : "1";
    if (!detailsDiv.classList.contains("hidden")) {
        setTimeout(() => {
            detailsDiv.style.transform = "translateY(0)";
        }, 50);
    } else {
        detailsDiv.style.transform = "translateY(20px)";
    }
}
function animateMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "Paiement en cours...";
    messageDiv.classList.remove("hidden");
    messageDiv.style.opacity = "1";
    setTimeout(() => {
        messageDiv.style.opacity = "0";
        setTimeout(() => {
            messageDiv.classList.add("hidden");
        }, 500);
    }, 2000);
}