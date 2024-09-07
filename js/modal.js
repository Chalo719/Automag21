function openModal() {
    modal.style.display = "block";
    body.style.overflowY = "hidden";
    body.style.paddingRight = `${scrollWidth}px`;
}

function closeModal() {
    modal.style.display = "none";
    body.style.overflowY = "scroll";
    body.style.paddingRight = 0;
}

// создадим элемент с прокруткой
let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

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