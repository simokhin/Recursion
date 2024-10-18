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
        break
			} else {
				array.push(array[i - 1] + array[i - 2]);
			}
		}
	}

	return array;
}

function fibRec(n) {
	console.log("This was printed recursively");
}
