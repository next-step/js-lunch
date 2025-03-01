import restaurant from '../model/restaurant.js'
import { render } from '../view/render'
import { addData } from '../model/saveData.js'

export const setEventhandler = () => {
	const newRestaurant = new restaurant()
	inputController(newRestaurant)
	selectController(newRestaurant)
	btnController(newRestaurant)
}

const btnController = (store) => {
	const leftBtn = document.querySelector('.cancle')
	const rightBtn = document.querySelector('.add')

	const modal = document.querySelector('.modal')
	leftBtn.addEventListener('click', () => {
		modal.classList.remove('modal__open')
	})

	rightBtn.addEventListener('click', () => {
		addData(store.restaurantInfo)
		modal.classList.remove('open')
		render()
	})
}

const inputController = (store) => {
	const name = document.getElementById('name')
	name.addEventListener('input', (e) => {
		inputNameHandler(e, store)
	})

	const description = document.getElementById('description')
	description.addEventListener('input', (e) => {
		inputDescriptionHandler(e, store)
	})

	const link = document.getElementById('link')
	link.addEventListener('input', (e) => {
		inputLinkHandler(e, store)
	})
}

const selectController = (store) => {
	const category = document.getElementById('category')
	category.addEventListener('change', (e) => {
		selectCategoryHandler(e, store)
	})

	const distance = document.getElementById('distance')
	distance.addEventListener('change', (e) => {
		selectDistanceHandler(e, store)
	})
}

const selectCategoryHandler = (event, store) => {
	const value = event.target.value

	store.setCategory(value)
}
const selectDistanceHandler = (event, store) => {
	const value = event.target.value

	store.setDistance(value)
}

const inputNameHandler = (event, store) => {
	const value = event.target.value

	store.setName(value)
}
const inputDescriptionHandler = (event, store) => {
	const value = event.target.value

	store.setDescription(value)
}
const inputLinkHandler = (event, store) => {
	const value = event.target.value

	store.setLink(value)
}
