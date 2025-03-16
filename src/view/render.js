import { makeRestaurant } from './card.js'
import { getData } from '../model/saveData.js'

export const render = (data) => {
	const main = document.querySelector('main')
	const ul = document.querySelector('ul')
	ul.innerHTML = ''

	data.forEach((item) => {
		const card = makeRestaurant(item)
		ul.appendChild(card)
	})
	if (main) {
		main.appendChild(ul)
	}
}

export const reRender = () => {
	const main = document.querySelector('main')
	const ul = document.querySelector('ul')
	ul.innerHTML = ''

	const data = getData()
	data.forEach((item) => {
		const card = makeRestaurant(item)
		ul.appendChild(card)
	})
	if (main) {
		main.appendChild(ul)
	}
}
