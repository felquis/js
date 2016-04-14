'use strict'

function Count (container) {
	var _this = {}

	_this.total = 0
	_this.component = document.querySelector(container)
	_this.buttonElement = _this.component.querySelector('button')
	_this.totalElement = _this.component.querySelector('.total')
	_this.onButtonClick = function (event) {
		_this.total += 1
		_this.publish('increase', _this.total)
	}

	_this.set = function (number) {
		_this.total = parseInt(number) || 0

		_this.publish('increase', _this.total)
	}

	_this.init = function () {
		_this.buttonElement.addEventListener('click', _this.onButtonClick)

		_this.subscribe('increase', function(number) {
			localStorage.setItem('lastNumber', number)
		    _this.totalElement.innerHTML = number
		});
	}

	mediator.installTo(_this)

	return {
		set: _this.set,
		init: _this.init,
		on: _this.subscribe
	}
}
