window.addEventListener('click', function(event){
    
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
        }
    }

});