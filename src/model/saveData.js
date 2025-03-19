import data from '../data.js'

export const getInitData = () => {
	try {
		const existingData = localStorage.getItem('restaurantData')
		if (!existingData) {
			localStorage.setItem('restaurantData', JSON.stringify(data.storeList))
		}
		return JSON.parse(localStorage.getItem('restaurantData'))
	} catch (error) {
		console.error('LocalStorage 접근 오류:', error)
		return data.storeList
	}
}

export const addData = (newItem) => {
	const currentData = JSON.parse(localStorage.getItem('restaurantData'))
	currentData.push(newItem)
	localStorage.setItem('restaurantData', JSON.stringify(currentData))
}

export const deleteData = (name) => {
	const currentData = JSON.parse(localStorage.getItem('restaurantData'))
	const newData = JSON.stringify(currentData.filter((item) => item.name !== name))
	localStorage.setItem('restaurantData', newData)
}

export const getData = () => {
	return JSON.parse(localStorage.getItem('restaurantData'))
}

export const editData = (newData) => {
	localStorage.setItem('restaurantData', JSON.stringify(newData))
}
