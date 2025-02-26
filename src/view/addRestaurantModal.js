const CATEGORY_OPTIONS = ['', '한식', '중식', '일식', '양식', '아시안', '기타']
const DISTANCE_OPTIONS = ['', 5, 10, 15, 20, 30]
const TARGET_TEXT = {
	category: '카테고리',
	name: '이름',
	distance: '거리(도보 이동 시간)',
	description: '설명',
	link: '참고 링크'
}

export const makeAddModal = () => {
	const modalContainer = document.querySelector('.modal-container')

	const title = document.createElement('h2')
	title.classList.add('modal-title', 'text-title')

	const category = makeSelect('category', CATEGORY_OPTIONS)
	const categoryContainer = makeForm('category')
	categoryContainer.appendChild(category)

	const distance = makeSelect('distance', DISTANCE_OPTIONS)
	const distanceContainer = makeForm('distance')
	distanceContainer.appendChild(distance)

	const name = makeInput('name')
	const nameContainer = makeForm('name')
	nameContainer.appendChild(name)

	const description = makeTextArea('description')
	const descriptionContainer = makeForm('description')
	descriptionContainer.appendChild(description)

	const link = makeInput('link')
	const linkContainer = makeForm('link')
	linkContainer.appendChild(link)

	const btns = makeBottomBtnArea()

	modalContainer.append(title, categoryContainer, nameContainer, distanceContainer, descriptionContainer, linkContainer, btns)
}

const makeInput = (target) => {
	const input = document.createElement('input')
	input.setAttribute('type', 'text')
	input.setAttribute('name', target)
	input.setAttribute('id', target)

	return input
}

const makeTextArea = (target) => {
	const textarea = document.createElement('textarea')
	textarea.setAttribute('cols', 30)
	textarea.setAttribute('rows', 5)
	textarea.setAttribute('name', target)
	textarea.setAttribute('id', target)

	return textarea
}

const makeSelect = (target, options) => {
	const select = document.createElement('select')
	select.setAttribute('id', target)

	options.forEach((item) => {
		if (target === 'distance') {
			const option = makeDistanceOption(item)
			select.appendChild(option)
		}

		if (target === 'category') {
			const option = makeCategoryOption(item)
			select.appendChild(option)
		}
	})

	return select
}

const makeForm = (target) => {
	const form = document.createElement('div')
	form.setAttribute('class', 'form-item form-item--required')

	const label = document.createElement('label')
	label.setAttribute('for', `${target} text-caption`)
	label.innerText = TARGET_TEXT[target]
	form.append(label)

	return form
}

const makeDistanceOption = (item) => {
	const optionItem = document.createElement('option')
	optionItem.setAttribute('value', item)
	optionItem.innerText = item === '' ? '선택해 주세요' : `${item}분 내`

	return optionItem
}

const makeCategoryOption = (item) => {
	const optionItem = document.createElement('option')
	optionItem.setAttribute('value', item)
	optionItem.innerText = item === '' ? '선택해 주세요' : item

	return optionItem
}

const makeBottomBtnArea = () => {
	const container = document.createElement('div')
	container.classList.add('button-container')
	const btnLeft = document.createElement('button')
	const btnRight = document.createElement('button')

	btnLeft.classList.add('button', 'button--secondary', 'text-caption')
	btnRight.classList.add('button', 'button--primary', 'text-caption')
	btnLeft.innerText = '취소하기'
	btnRight.innerText = '추가하기'
	container.appendChild(btnLeft)
	container.appendChild(btnRight)

	return container
}
