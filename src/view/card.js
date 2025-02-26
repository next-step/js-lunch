import { makeIcon } from './icon.js'
import { showModalContent } from '../controller/restaurantDetailController.js'

export const makeRestaurant = (restaurant) => {
	const card = document.createElement('li')

	card.setAttribute('class', 'restaurant')

	const info = document.createElement('div')
	info.setAttribute('class', 'restaurant__info')

	const icon = makeIcon(restaurant.category)
	card.appendChild(icon)
	const title = makeTitle(restaurant.name)
	card.appendChild(title)

	const distance = makeDistance(restaurant.distance)
	card.appendChild(distance)

	const description = makeDescription(restaurant.description)
	card.appendChild(description)

	info.append(title, distance, description)
	card.appendChild(info)
	card.addEventListener('click', () => showModalContent(restaurant))

	return card
}

export const makeTitle = (name) => {
	const element = document.createElement('h3')
	element.classList.add('restaurant__name', 'text-subtitle')
	element.innerText = name
	return element
}

export const makeDistance = (distance) => {
	const element = document.createElement('span')
	element.classList.add('restaurant__distance', 'text-body')
	element.innerText = `캠퍼스로부터 ${distance}분 내`
	return element
}

const makeDescription = (desc) => {
	const element = document.createElement('p')
	element.classList.add('restaurant__description', 'text-body')
	element.innerText = desc
	return element
}
