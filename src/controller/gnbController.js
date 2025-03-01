import { setEventhandler } from './addRestaurantController.js'
import { makeAddModal } from '../view/addRestaurantModal.js'

export const gnbAddBtnHandler = () => {
	const gnbBtn = document.querySelector('.gnb__button')

	gnbBtn.addEventListener('click', () => {
		showAddModal()
	})
}

const showAddModal = () => {
	const modal = document.querySelector('.modal')
	modal.classList.add('modal__open')

	makeAddModal()
	setEventhandler()
}
