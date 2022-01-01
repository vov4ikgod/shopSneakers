// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id, // id
			imgSrc: card.querySelector('.product-img').getAttribute('src'), // картинка
			title: card.querySelector('.item-title').innerText, // заголовок
			itemsInBox: card.querySelector('[data-items-in-box]').innerText, // штуки
			price: card.querySelector('.price__currency').innerText, // цена
			counter: card.querySelector('[data-counter]').innerText, // счетчик
		};

        // ПРОВЕРКА есть ли уже такой товар в карзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart);

        // Если товар есть в коризне
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в корзине

            // Собранныне данные поставим в шаблон для мовара в корзине
            const cartItemHMTL = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
                            </div>`;
            
            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforebegin', cartItemHMTL); // beforebegin - в НАЧАЛО.   
        }

        // Сбрасываем счетчик на 1
        card.querySelector('[data-counter]').innerText = '1';
	}
});

