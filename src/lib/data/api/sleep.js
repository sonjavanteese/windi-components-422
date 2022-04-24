export function sleep(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default sleep;