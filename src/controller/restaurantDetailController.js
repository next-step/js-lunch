import { makeModalContent } from '../view/modal.js'
import { changeFavoriteState } from '../model/restaurant.js'

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

const addFavoriteList = (restaurant) => {
	const favoriteIcon = document.querySelector('.favorite-icon')

	favoriteIcon.addEventListener('click', () => {
		const updatedRestaurant = changeFavoriteState(restaurant)
		// 아이콘 업데이트
		if (updatedRestaurant && updatedRestaurant.isFavorite) {
			favoriteIcon.setAttribute('src', './public/assets/favorite-icon-filled.png')
		} else {
			favoriteIcon.setAttribute('src', './public/assets/favorite-icon-lined.png')
		}
	})
}
