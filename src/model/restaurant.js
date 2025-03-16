import { addData, editData, getData } from './saveData.js'

export default class restaurant {
	constructor() {
		this.restaurantInfo = {
			category: '',
			distance: 0,
			name: '',
			description: '',
			link: '',
			isFavorite: false
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

export const filteringFavorite = (data) => {
	return data.slice().filter((item) => item.isFavorite === true)
}

export const changeFavoriteState = (restaurant) => {
	const data = getData()
	const newData = data.map((item) => {
		if (item.name === restaurant.name) {
			return { ...item, isFavorite: !item.isFavorite }
		}
		return item
	})

	editData(newData)
	return newData.find((item) => item.name === restaurant.name)
}
