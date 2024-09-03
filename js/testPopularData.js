const testAllowedItem = `
    <li class="popular__product-card">
        <span class="product__status product__status--available mb-10">
            В наличии
        </span>
        <img src="./img/pads-img.png" alt="Фото товара" class="product__img">
        <h4 class="product__title">
            Колодки тормозные задние дисковые LADA
            (21905-3502080-87) Vesta, Kalina,
            Granta Sport, X-Ray Cross (к-т 4шт)
        </h4>
        <div class="product__number-container flex-wrapper mb-15">
            <span class="product__number-title">Номер запчасти</span>
            <span class="product__number">5550-757667</span>
        </div>
        <button class="product__order-btn">Заказать</button>
    </li>`

const testOrderItem = `
    <li class="popular__product-card">
        <span class="product__status product__status--order mb-10">
            Под заказ
        </span>
        <img src="./img/pads-img.png" alt="Фото товара" class="product__img">
        <h4 class="product__title">
            Колодки тормозные задние дисковые LADA
            (21905-3502080-87) Vesta, Kalina,
            Granta Sport, X-Ray Cross (к-т 4шт)
        </h4>
        <div class="product__number-container flex-wrapper mb-15">
            <span class="product__number-title">Номер запчасти</span>
            <span class="product__number">5550-757667</span>
        </div>
        <button class="product__order-btn">Заказать</button>
    </li>`

const testItems = document.querySelector('.popular__container');
for (let i = 0; i < 6; i++) {
    testItems.innerHTML += testAllowedItem + testOrderItem;
}