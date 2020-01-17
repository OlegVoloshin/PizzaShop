function something()
{
	var x = window.localStorage.getItem('bbb'); // рaвносильно хэшу x = hh['bbb']
	
	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('bbb', x); // hh['bbb'] = x
	alert(x);
}
// В папке lesson 33 тестовое приложение на руби чтобы понимать как работаем с хэшем
function add_to_cart(id) {

	var key = 'product_' + id
	
	var x = window.localStorage.getItem(key);
	x = x*1 + 1; // x = x + 1
	window.localStorage.setItem(key, x);

	// Вывод количества штук в корзине
	alert('Items in your cart: ' + cart_get_number_of_items());
}


function cart_get_number_of_items()
{
	var cnt = 0;

	for (var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в руби hh['key'] = x

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt;
}

function cart_get_orders()
{
	var orders = '';

	for (var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в руби hh['key'] = x

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders;
}