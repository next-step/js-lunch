import { sortingByDistance, sortingByName, filteringByCategory } from '../model/restaurant.js'
import { render } from '../view/render.js'
import { getInitData } from '../model/saveData.js'

export const addSelectEvent = () => {
	const sort = document.querySelector('#sorting-filter')

	sort.addEventListener('change', (e) => {
		const targetValue = e.target.value
		const sortingObj = sortingHandler(targetValue)
		render(sortingObj)
	})

	const filtering = document.querySelector('#category-filter')
	filtering.addEventListener('change', (e) => {
		const targetValue = e.target.value
		const sortingObj = targetValue === '' ? getInitData() : filteringHandler(targetValue)
		render(sortingObj)
	})
}

const sortingHandler = (value) => {
	if (value === '거리순') {
		return sortingByDistance()
	}

	if (value === '이름순') {
		return sortingByName()
	}
}

const filteringHandler = (category) => {
	return filteringByCategory(category)
}
