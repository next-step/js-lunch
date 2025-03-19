import { filteringFavorite } from '../model/restaurant.js'
import { render } from '../view/render.js'
import { getData } from '../model/saveData.js'

export const subGnbBtnHandler = () => {
	const gnbBtns = document.querySelectorAll('.sub__title')

	gnbBtns.forEach((btn, index) => {
		btn.addEventListener('click', (e) => {
			changeSelectedTitle(e.target)

			if (index === 0) {
				const data = getData()
				render(data)
			}

			if (index === 1) {
				const filteredData = filteringFavoriteList()
				render(filteredData)
			}
		})
	})
}

const changeSelectedTitle = (target) => {
	if (target.classList.contains('selected-title')) return

	const beforeSelectedTitle = document.querySelector('.selected-title')
	beforeSelectedTitle.classList.remove('selected-title')

	target.classList.add('selected-title')
}

const filteringFavoriteList = () => {
	const data = getData()
	const editedData = filteringFavorite(data)
	return editedData
}
