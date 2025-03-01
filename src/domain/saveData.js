import data from '../data.js'

export const saveinitData = () => {
	localStorage.setItem('restaurantData', JSON.stringify(data))
}

export const addData = (newItem) => {
	const currentData = JSON.parse(localStorage.getItem('restaurantData'))
	currentData.storeList.push(newItem)
	localStorage.setItem('restaurantData', currentData)
}

export const deleteData = (name) => {
	const currentData = JSON.parse(localStorage.getItem('restaurantData'))
	const newData = currentData.storeList.filter((item) => item.name !== name)
	localStorage.setItem('restaurantData', newData)
}

export const getData = () => {
	return JSON.parse(localStorage.getItem('restaurantData')).storeList
}
