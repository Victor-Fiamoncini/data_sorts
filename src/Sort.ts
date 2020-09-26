abstract class Sort {
	constructor(protected array: number[]) {}

	public result(): number[] {
		console.log(`Sorted array: ${this.array.join(', ')}`)

		return this.array
	}

	protected swap(first: number, second: number): void {
		const tempElement = this.array[first]

		this.array[first] = this.array[second]
		this.array[second] = tempElement
	}

	public abstract sort(): void
}

export default Sort