









window.addEventListener('click', function(event){
    
    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопкам только + или -
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // Находим div с числом счетчика
        const counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем явлется ли по которому мы кликнули элемент кнопкой Плюс
    if (event.target.dataset.action === 'plus') {

        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // Находим div с числом счетчика
        const counter = counterWrapper.querySelector('[data-counter]');

        counter.innerText = ++counter.innerText;
    }

    // Проверяем явлется ли элемент по которому мы кликнули кнопкой Минус
    if (event.target.dataset.action === 'minus') {

        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // Находим div с числом счетчика
        const counter = counterWrapper.querySelector('[data-counter]');

        if (parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // ПРОВЕРКА на товар который находится в корзине
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove()

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            calcCartPriceAndDelivery();
        }

    }

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

});








