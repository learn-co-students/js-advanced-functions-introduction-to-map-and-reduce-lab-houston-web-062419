// Your code here
const mapToNegativize = function(sourceArray)
{
    return sourceArray.map(i => -i)
}
const mapToNoChange = function(sourceArray)
{
    return sourceArray.map(i => i)
}
const mapToDouble = function(sourceArray)
{
    return sourceArray.map(i => i*2)
}
const mapToSquare = function(sourceArray)
{
    return sourceArray.map(i => i**2)
}
const reduceToTotal = function(sourceArray, startingPoint = null)
{
    return sourceArray.reduce((acc,i) => i+acc,startingPoint)
}
const reduceToAllTrue = function(sourceArray){
    return sourceArray.reduce((acc,i) => {
        if(acc == null || !!acc == true ){
            return !!i
        } else {
            return false
        }
    })
    
}
const reduceToAnyTrue = function(sourceArray){
    return sourceArray.reduce((acc,i) => {
        if(i == true || acc == true){
            return i 
        } else {
            return false
        }
    })
}