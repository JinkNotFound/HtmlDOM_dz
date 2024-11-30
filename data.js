const products = [
	{ id: 1, name: 'Product 1', image: 'https://zornet.ru/_fr/82/4918040.jpg', price: '$10' },
	{
		id: 2,
		name: 'Product 2',
		image:
			'https://lh5.googleusercontent.com/proxy/3R2dQcKbysSW5nkqyys84o2JKav8QOZI5pPPKn8TYoR4_eqh7zFCwj8CsoHQ71VhGg8Ee4BDvURGDVoQ3Wo54g2y-A2OrRjmaw',
		price: '$20',
	},
	{
		id: 3,
		name: 'Product 3',
		image:
			'data:image/jpeg;base64,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',
		price: '$30',
	},
];
