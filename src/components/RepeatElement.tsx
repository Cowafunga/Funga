interface IRepeatElement {
	children: any;
	times?: number;
}
export default function RepeatElement({ children, times = 1 }: IRepeatElement) {
	return (
		<>
			{Array(times)
				.fill(0)
				.map((item, index) => children)}
		</>
	);
}
