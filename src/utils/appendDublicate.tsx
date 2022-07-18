interface IAppendDublicate {
	text: string;
	times?: number;
	separator?: string;
}

export default function appendDublicate({
	text,
	times = 1,
	separator = ", ",
}: IAppendDublicate) {
	let newString = text;
	for (let i = 0; i < times; i++) {
		newString += separator + text;
	}
	return newString;
}
