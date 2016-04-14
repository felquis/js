'use strict'

var count = new Count('.element-container')

count.init()

count.set(localStorage.getItem('lastNumber'))

// TODO: insert buttons to init and destroy the count component in the interface
