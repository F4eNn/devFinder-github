export const reworkDate = (date: string) => {
	const currentDate = date
	const reworkedDate = new Date(currentDate)
	const dateArray = reworkedDate.toDateString().split(' ').join(' ')
	const newDate = dateArray.slice(3)
	return newDate
}
