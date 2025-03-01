import data from '../data.js'
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

export const sortingByDistance = () => {
	return data.storeList.slice().sort((a, b) => a.distance - b.distance)
}

export const sortingByName = () => {
	return data.storeList.slice().sort((a, b) => a.name - b.name)
}

export const filteringByCategory = (category) => {
	if (!category.length) return data.storeList
	return data.storeList.slice().filter((item) => item.category === category)
}
