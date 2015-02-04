$(document).ready(function(){
    // This is a simple map example. In this snippet, we iterate over an array of strings and concatenate '10' to each of them. At the same time, I'm logging the arguments to my map callback function, so that we can see what values it is using.
    // var myArray = ['a', 'b', 'c', 'd', 'e']
    // newArray = myArray.map(function(elem){
    //     // console.log('elem: ', elem) 
    //     // console.log('index: ', i) 
    //     // console.log('array: ', arr) 
    //     console.log('============')
        
    //     // return elem + 10
    // })
    // console.log('old array: ', myArray)
    // console.log('new array: ', newArray)

    // Filter and map both return arrays, which have the filter and map methods. Therefore, you can chain calls to filter and map.
    // var fullArray = [1, 0, true, false, 'hi', null]
    // var filteredAndMappedArray = fullArray.filter(function(elem){
    //     if (elem) { 
    //         return true 
    //     }
    //     else {
    //         return false
    //     }
    // }).map(mapFunction)

    // We start with an array of numbers, and we want to REDUCE it down to just one number: the sum of all the numbers in the array.
    // var fullArray = ['2','3','5','7']
    // var result = fullArray.reduce(function(result, elem){
    //     console.log('total: ', total)
    //     console.log('elem: ', elem)
    //     console.log('===========')
    //     return total + elem
    // }, 0)
    // console.log('result: ', result)

    // If you call map on an array of arrays, the 'elem' in your map callback will be an array, which also has the map method. 
    // var outerArray = [
    //     [1,2,3],
    //     ['a','b','c']
    // ]

    // outerArray.map(function(elem){
    //     elem.map(function(innerElem){
    //         console.log(innerElem)
    //     })
    // })
    
    // When the submit button is clicked, log the value of the input box 500 times. For improved performance, we find the input box once and cache it in $myInput, rather than searching for the same input box 500 times.
    // $('#submit').on('click', function(){
    //     var $myInput = jQuery('#myInput')
    //     for (var i = 0; i<500; i++){
    //         console.log($myInput.val())
    //     }
    // })

    // Examples of apply and bind. Remember: apply calls the function immediately, with a different context. Bind returns a new function, but doesn't call it. 
    var myFunction = function(arg1, arg2){ console.log('this: ', this); console.log(arg1, arg2) }
    // myFunction()

    var myObj = {
        doSomething : myFunction
    }
    // myObj.doSomething()
    var anotherObj = {
        doNothing : null
    }
    var inputArgs = []
    // myObj.doSomething.apply(anotherObj, inputArgs)

    newFunction = myObj.doSomething.bind(anotherObj)
    console.log(newFunction)
    newFunction()
})