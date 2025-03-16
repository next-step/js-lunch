import { makeModalContent } from '../view/modal.js'

export const showRestaurantDetail = (restaurant) => {
	const modal = document.querySelector('.modal')
	modal.classList.add('modal__open')
	const modalContainer = document.querySelector('.modal-container')
	const modalContent = makeModalContent(restaurant)

	modalContainer.appendChild(modalContent)
}

const removeModalContent = () => {
	const modalContainer = document.querySelector('.modal-container')
	modalContainer.innerHTML = ''
}

export const removeRestaurantDetail = () => {
	const modal = document.querySelector('.modal')
	modal.classList.remove('modal__open')
	removeModalContent()
}
