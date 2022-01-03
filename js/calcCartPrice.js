






// РАБОТА С ДОСТАВКОЙ
 
function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartdelivery = document.querySelector('[data-cart-delivery');

    // Общая стоимость товаров
    let priceTotal = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal; 

    // Скрываем / Показываем блок со стоимостью доставки
    if (priceTotal > 0) {
        cartdelivery.classList.remove('none');
    } else {
        cartdelivery.classList.add('none')
    }

    // Указываем стоимость доставки
    if (priceTotal >= 22222) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '500 ₽';
    }
}





