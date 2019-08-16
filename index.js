// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(array => array * (-1))
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(array => array)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(array => array * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(array => array ** 2)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(((accumulator, currentValue) => accumulator + currentValue), startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(element => element)
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.includes(true)
}