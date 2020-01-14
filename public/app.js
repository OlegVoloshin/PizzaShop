function something()
{
	var x = window.localStorage.getItem('bbb'); // рaвносильно хэшу x = hh['bbb']
	
	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('bbb', x); // hh['bbb'] = x
	alert(x);
}
	