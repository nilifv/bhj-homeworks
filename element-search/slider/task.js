let slider__item = Array.from(document.getElementsByClassName("slider__item"));
let slider__arrow_prev = document.querySelector("div.slider__arrow.slider__arrow_prev");
let slider__arrow_next = document.querySelector("div.slider__arrow.slider__arrow_next");
let counter = 0;

slider__arrow_next.onclick = function() {
    counter++
    if (counter > slider__item.length - 1) {
        counter = 0;
        slider__item[counter].className = "slider__item slider__item_active";
        slider__item[slider__item.length - 1].className = "slider__item slider";
        return
    };
    slider__item[counter].className = "slider__item slider__item_active";
    slider__item[counter - 1].className = "slider__item";
}
slider__arrow_prev.onclick = function() {
    counter--
    if (counter < 0) {
        counter = slider__item.length - 1;
        slider__item[counter].className = "slider__item slider__item_active";
        slider__item[0].className = "slider__item";
        return
    };
    slider__item[counter].className = "slider__item slider__item_active";
    slider__item[counter + 1].className = "slider__item";
}
