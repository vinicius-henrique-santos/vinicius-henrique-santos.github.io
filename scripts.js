document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggleButton");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            targetSection.classList.toggle("hidden");
        });
    });

    const paymentButtons = document.querySelectorAll(".paymentButton");
    paymentButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.getAttribute("data-product");
            const productPrice = this.getAttribute("data-price");
            const paymentMethod = this.getAttribute("data-payment");
            const message = `Compra realizada! Produto: ${productName}, Valor: ${productPrice}R$, Forma de pagamento: ${paymentMethod}`;
            alert(message);
        });
    });
});