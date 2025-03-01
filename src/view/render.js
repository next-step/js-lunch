import { makeRestaurant } from './card.js'
import { getData } from '../model/saveData.js'

export const render = () => {
	const main = document.querySelector('main')
	const ul = document.querySelector('ul')
	ul.innerHTML = ''
	const storeList = getData()
	storeList.forEach((item) => {
		const card = makeRestaurant(item)
		ul.appendChild(card)
	})
	if (main) {
		main.appendChild(ul)
	}
}
