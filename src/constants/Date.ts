const date = new Date();

export const addZero = (num: number): string | number => {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let day: number = date.getDate()
let month: number = date.getMonth() + 1

if (day === 31 || 30) {
	day = 1
	month += 1
}

export const currentDate: string = `${ addZero(date.getFullYear()) }-${ addZero(month) }-${ addZero(day) } ${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }`