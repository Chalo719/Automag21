function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

const modal = document.getElementById("modal");

const modalInner = document.getElementById("modal-inner");
modalInner.innerHTML = `
    <div class="modal__header mb-15">
        <h2 class="modal__title">Оставьте заявку и мы с Вами свяжемся!</h2>
    </div>
    <form action="#" class="modal-feedback__form">
        <div class="modal-form__input-container flex-wrapper mb-15">
            <input class="form__input" id="name" name="name" type="text" placeholder="Имя">
            <input class="form__input" id="tel" name="tel" type="tel" placeholder="+7 (9__) ___-__-__">
        </div>

        <textarea class="form__textarea mb-15" id="comment" name="comment" rows="4" placeholder="Комментарий"></textarea>

        <div class="form__btn-container">
            <input class="form__btn" type="submit" value="Отправить">
            <input class="form__btn form__btn--transparent" type="reset" value="Очистить">
        </div>
    </form>`

const orderBtns = Array.from(document.getElementsByClassName("product__order-btn"));
orderBtns.forEach(btn => {
    btn.onclick = openModal;
});

const closeModalBtn = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

closeModalBtn.onclick = closeModal;