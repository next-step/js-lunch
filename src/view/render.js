import { makeRestaurant } from './card.js'
import { makeAddModal } from './addRestaurantModal.js'
import { getData } from '../domain/saveData.js'

export const render = () => {
	const main = document.querySelector('main')
	const ul = document.querySelector('ul')
	ul.innerHTML = ''
	const storeList = getData()
	console.log(storeList)
	storeList.forEach((item) => {
		const card = makeRestaurant(item)
		ul.appendChild(card)
	})
	if (main) {
		main.appendChild(ul)
	}
	makeAddModal()
}
