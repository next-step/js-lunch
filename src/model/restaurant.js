import { addData, getData, editData } from './saveData.js'

export default class restaurant {
	constructor() {
		this.restaurantInfo = {
			category: '',
			distance: 0,
			name: '',
			description: '',
			link: ''
		}
	}

	setCategory(category) {
		this.restaurantInfo.category = category
	}

	setDistance(distance) {
		this.restaurantInfo.distance = distance
	}

	setName(name) {
		this.restaurantInfo.name = name
	}

	setDescription(description) {
		this.restaurantInfo.description = description
	}

	setLink(link) {
		this.restaurantInfo.link = link
	}

	saveData() {
		addData(this.restaurantInfo)
	}
}

export const sortingByDistance = () => {
	const data = getData()
	const editedData = data.slice().sort((a, b) => a.distance - b.distance)

	editData(editedData)
	return editedData
}

export const sortingByName = () => {
	const data = getData()
	const editedData = data.slice().sort((a, b) => a.name - b.name)

	editData(editedData)
	return editedData
}

export const filteringByCategory = (category) => {
	const data = getData()
	if (!category.length) return data.storeList
	const editedData = data.slice().filter((item) => item.category === category)

	editData(editedData)
	return editedData
}
