'use strict'

var count = {
	total: 0
}

mediator.installTo(count)

var buttonElement = document.querySelector('button')
var totalElement = document.querySelector('.total')
var onButtonClick = function (event) {
	count.total += 1
	count.publish('increase', count.total)
}

count.subscribe('increase', function(number) {
    totalElement.innerHTML = number
});

buttonElement.addEventListener('click', onButtonClick)
