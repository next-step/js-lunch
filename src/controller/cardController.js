import { sortingByDistance, sortingByName, filteringByCategory } from '../model/restaurant.js'
import { render } from '../view/render.js'
import { getInitData } from '../model/saveData.js'
import { getData, editData } from './saveData.js'

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
	const data = getData()
	let editedData
	if (value === '거리순') {
		editedData = sortingByDistance(data)
	}

	if (value === '이름순') {
		sortingByName(data)
	}
	editData(editedData)

	return editedData
}

const filteringHandler = (category) => {
	const data = getData()
	const editedData = filteringByCategory(category, data)

	return editedData
}
