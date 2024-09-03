function allowArrows() {
    if (position < 0) {
        prevArrow.classList.add('carousel__arrow--allowed')
    } else {
        prevArrow.classList.remove('carousel__arrow--allowed')
    }

    if (position > maxPosition) {
        nextArrow.classList.add('carousel__arrow--allowed')
    } else {
        nextArrow.classList.remove('carousel__arrow--allowed')
    }
}

const list = document.querySelector('.popular__container');
const listElems = Array.from(document.querySelectorAll('.popular__product-card'));

const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');

const width = listElems[0].offsetWidth; // ширина картинки
const count = 3; // видимое количество изображений
const gap = 10;
const maxPosition = -(width + gap) * (listElems.length - count);

let position = 0; // положение ленты прокрутки

prevArrow.onclick = function () {
    // сдвиг влево
    position += width + gap;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';

    allowArrows();
};

nextArrow.onclick = function () {
    // сдвиг вправо
    position -= width + gap;
    position = Math.max(position, maxPosition);
    list.style.marginLeft = position + 'px';

    allowArrows();
};