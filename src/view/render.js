import { makeRestaurant } from './card.js'
import { makeAddModal } from './addRestaurantModal.js'

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
	makeAddModal()
}
