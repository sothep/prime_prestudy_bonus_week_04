function Splinter(value1, value2) {
	var z = value1 * value2;
	var splinterArray = [value1, value2, z];
	return splinterArray;
}

console.log("Given arguments: 1 and 2, the Splinter function returns: [" + Splinter(1, 2) + "]\n");