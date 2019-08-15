function mapToNegativize(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = -array[i]
	}
	return array
}
function mapToNoChange(array) {
	return array
}
function mapToDouble(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i] * 2
	}
	return array
}
function mapToSquare(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i] ** 2
	}
	return array
}
function reduceToTotal(array, startingPoint = 0) {
	for (var i = 0; i < array.length; i++) {
		startingPoint += array[i] 
	}
	return startingPoint
}
function reduceToAllTrue(array) {
	for (var i = 0; i < array.length; i++) {
		if (!array[i])
			return false 
	}
	return true
}
function reduceToAnyTrue(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i])
			return true 
	}
	return false
}