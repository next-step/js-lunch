import { addData } from './saveData.js'

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

export const sortingByDistance = (data) => {
	return data.slice().sort((a, b) => a.distance - b.distance)
}

export const sortingByName = (data) => {
	return data.slice().sort((a, b) => a.name - b.name)
}

export const filteringByCategory = (category, data) => {
	if (!category.length) return data.storeList
	return data.slice().filter((item) => item.category === category)
}
