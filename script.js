document.addEventListener('DOMContentLoaded', () => {
	const productList = document.getElementById('product-list');
	const cartList = document.getElementById('cart-list');

	// Отображение списка продуктов
	products.forEach((product) => {
		const li = document.createElement('li');
		li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.price}</p>
          <button data-id="${product.id}">Add to Cart</button>
      `;
		productList.appendChild(li);
	});

	// Добавление товара в корзину
	productList.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			const productId = e.target.dataset.id;
			const product = products.find((p) => p.id == productId);

			if (product) {
				const li = document.createElement('li');
				li.dataset.id = product.id;
				li.innerHTML = `
                  ${product.name} - ${product.price}
                  <button class="remove">X</button>
              `;
				cartList.appendChild(li);
			}
		}
	});

	// Удаление товара из корзины
	cartList.addEventListener('click', (e) => {
		if (e.target.classList.contains('remove')) {
			const li = e.target.closest('li');
			li.remove();
		}
	});
});
