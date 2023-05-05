import { FetchingUserData } from './fetched-data.js'
const input: HTMLInputElement = document.querySelector('#input')!
export const errorMsg: HTMLSpanElement = document.querySelector('#errorMsg')!
let enteredInput: string = 'Octocat'

export const inputValueHandler = (e?: MouseEvent) => {
	if (e) {
		e.preventDefault()
	}
	if (input.value.trim() === '') {
		errorMsg.style.display = 'block'
		return
	} else {
		errorMsg.style.display = 'none'
	}
	enteredInput = input.value
	FetchingUserData(enteredInput)
}
