// I'm sure that a much simpler way to solve this exists, but I can't find it.

function fib(n) {
	let array = [];
	for (let i = 0; i <= n; i++) {
		if (i === 0) {
			array.push(i);
		} else if (i === 1) {
			array.push(i);
			array.push(i);
			i += 1;
		} else {
			if (array[i - 1] + array[i - 2] === n) {
				array.push(n);
				break;
			} else {
				array.push(array[i - 1] + array[i - 2]);
			}
		}
	}

	return array;
}

// I couldn't do it by myself, so the code in function fibRec(n) 
// I took mostly from the stackoverflow.com

function fibRec(n) {
	if (n === 0) return [0];
	if (n === 1) return [0, 1];
	const array = fibRec(n - 1);
	return [...array, array[n - 1] + array[n - 2]]
}
