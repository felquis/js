'use strict'

function Count (container) {
	var _this = this

	this.total = 0
	this.component = document.querySelector(container)
	this.buttonElement = this.component.querySelector('button')
	this.totalElement = this.component.querySelector('.total')
	this.onButtonClick = function (event) {
		_this.total += 1
		_this.publish('increase', _this.total)
	}

	this.set = function (number) {
		_this.total = parseInt(number) || 0

		_this.publish('increase', _this.total)
	}

	this.init = function () {
		_this.buttonElement.addEventListener('click', _this.onButtonClick)

		_this.subscribe('increase', function(number) {
			localStorage.setItem('lastNumber', number)
		    _this.totalElement.innerHTML = number
		});
	}

	mediator.installTo(this)

	return this
}
