array-like objects
	- numeric indices
	- length property

examples:
	- string
	- arguments object
	- jQuery object

var add = function(x, y) {
	x // 'a'
	y // 'b'
	arguments[0] // 'a'
	arguments[1] // 'b'
	arguments[2] // 'c'
}

add('a', 'b', 'c')

for(var i=0; i<arguments.length; i++) {
	console.log(arguments[i])
}

$('.sale-item')
	.css()
	.append()

$('.sale-item').length // number of elements selected
var el = $('.sale-item')[2] // returns the third element (native element)

// convert a native element into a jQuery object:
$(el)

// get a jQuery object of a specific element directly:
$('.sale-item').eq(2)


$ function has 3 main behaviors:
1. selects elements				$('a')
2. creates elements 			$('<a href="http://google.com">Google</a>');
3. wraps native elements	$(this)





/*
event bubbling, event delegation
functional programming

testing/debugging events/jQuery, using developer tools
*/