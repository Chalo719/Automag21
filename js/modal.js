function openModal() {
    modal.style.display = "block";
    body.classList.add('no-scroll');
}

function closeModal() {
    modal.style.display = "none";
    body.classList.remove('no-scroll');
}

const body = document.getElementsByTagName('body')[0];

const modal = document.getElementById("modal");

const orderBtns = Array.from(document.getElementsByClassName("product__order-btn"));
orderBtns.forEach(btn => {
    btn.onclick = openModal;
});

const closeModalBtn = document.getElementsByClassName("close")[0];
closeModalBtn.onclick = closeModal;

const resetBtns = Array.from(document.querySelectorAll('input[type="reset"]'));

window.addEventListener("DOMContentLoaded", function () {
    resetBtns.forEach(btn => {
        btn.click();
    });
});

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};