// Basics of JavaScript

/*
    Multiline comment in JavaScript
    -- Variable Declaration in JS --
    Primative Types: Strings, integers, booleans, floats, arrays, objects(aka python dics)
    Functions in Javascript
    Loops in Javascript
*/

// String Variable
var first_name = 'Will'

// Display our value to the JSS Console
console.log(first_name)

// Integer Variable
var some_number = 32; // 👈This Semicolon is 'syntantic sugar' it isnt necessary but we like it.

console.log(some_number);

//Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable

var some_array = [1, 2, 3, 4]

console.log(some_array)

// Object variable

var some_object = { 'test' : 'Test me!!'}

console.log(some_object)

// JAVASCRIPT Hoisting example

console.log(something_Random)
var something_Random = 'This is a random string.'
console.log(something_Random)

// A better way of Declaring Variables is by using "let" or 'const'
//example
// console.log(some_random) wont work becausse of 'let'
let some_random = 384
console.log(some_random)

const super_hero = 'The Hulk'
console.log(super_hero)

// let keyword variables can be reassigned more easily than const variables

some_random = first_name + ' Smith'
console.log(some_random)

// super_hero = 'Ironman' cannot reassign const
console.log(super_hero)

/** 
 * === BASIC MATH Operations in JS ===
 */

// Addition
let sum = 5 + 5;
console.log(sum)

// Subtraction
let diff = 5 - 5;
console.log(diff)

// Multiplication
let product = 5 * 5;
console.log(product)

// Division
let quotient = 5 / 5;
console.log(quotient)

// Exponents 
let square = 5 ** 2 // let square ** = 2
console.log(square)

// More math Stuff
let find_floor = Math.floor(35.7)
console.log(find_floor)

// Find ceiling
let find_ceil = Math.ceil(35.7)
console.log(find_ceil)

// Mind Bender
let crazy_stuff = some_float + '4' // underfined, 7.14 , 3.14+4, 3.144
console.log(crazy_stuff)

// Mind Bender 2
let crazy_stuff2 = some_float + parseFloat('4') // underfined, 7.14 , 3.14+4, 3.144
console.log(crazy_stuff2)

// Ussing the let keyword and changing the Variable
let nba_goat = 'MJ'
console.log(nba_goat)

nba_goat = 'Kobe' // Redeclaring variable
console.log(nba_goat)

// Bad redeclaration 👇
// let nba_goat = 'LeBron';
// console.log(nba_goat)

/*
    ==== JAVASCRIPT FUNCTIONS ====
*/

// Regular named function
function addNums(){
    let num = 4;
    let num2 = 8;

    return num + num2
}

console.log(addNums())

// Variable named function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

// calling addNums2
console.log(addNums2(5,10))

function addNums3(x, y){
    return x + y
}

console.log(addNums3(9, 7))


// ES6+ ARROW FUNCTION WITH SINGLE PARAMETER
/*
    Using a single parameter in an arrow function
    can be done WITHOUT parens () but this can only
    be done with a single parameter
*/

let cubed = (num) => {
    return num **3
}

let cubed2 = num => {
    return num ** 3
}
console.log(cubed(4))
console.log(cubed2(5))

// Javascript Closure
// Self-Invoking Function

console.log(function(name){
    let hello = 'Hello World ' + name
    return hello
}('Terrel'))

// Name Func
function subtractNums(){
    let num = 10;
    let num2 = 5;
    return num - num2
}
console.log(subtractNums())

// Let name func
let subtractNums2 = function(num, num2){
    return num - num2
}
console.log(subtractNums2(20, 10))

// Arrow func
let subtractNums3 = (num) => {
    return num - 5
}

console.log(subtractNums3(20))


// Javasceipt control flow
// If sstatement

function determineAge(age){
    if ( age < 18 ){
        return 'Minor'
    } else if ( age >= 18 && age <= 65 ){
        return 'Adult Not Retired Yet'
    } else {
        return 'You Old as Hell'
    };
};

console.log(determineAge(33))

// Javvascript Ternary Operator

function determine_Age(age){
    return ( age < 18 ) ? 'Minor' : ( age >= 18 && age <= 65 ) ? 
    'Adult Not Retired Yet' : 'You Old as Hell' 
}

console.log(determine_Age(78))

// Loops in JavaScript -- For Loop
// For Loop Syntax --- for keyword(counter; condition ; incrementation/decrementation)

function countByOne(){
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has Stopped'
}

console.log(countByOne())


function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(decreaseByOne())

// While Loop -- JavaScript
function countWithWhile(){
    let i = 0 // 👈 counter
    let text = '';

    // While Loop
    while(i < 10){
        text += `This number is ... ${i} \n`
        i ++
    }
    return text
}

console.log(countWithWhile())

// Do While Loop
function countWithDoWhile(){
    let i = 0
    let text = '';

    // Do
    do{
        text += `This number is... ${i} \n`
        i ++
    } while( i < 10 )

    return text

}

console.log(countWithDoWhile())

/**
 * 
 * ==== Looping with Arrays and Array Methods, Array String Methods ====
 * 
 */

// Create an Array: groupOfNames
let groupOfNames = ['Brock', 'Misty', 'Ash', 'Gary', 'Alphonso']

// Index for first position 
console.log(groupOfNames[0]) // Brock with index

// Deconstruction of an Array

let brock, misty, ash, others;
[brock,misty,ash, ...others] = groupOfNames
// brock = groupOfNames[0] "Brock"

console.log(ash)
console.log(others)
console.log(groupOfNames[2])

// method 1 of loop through an array

function showAllNames(namesList){
    for(let i = 0; i < namesList.length; i++){
        console.log(namesList[i])
    }
    return 'Done with List of Names'
}

console.log(showAllNames(groupOfNames))

//Method 2 for looping
groupOfNames.forEach(element => console.log(element))


// JavaScript Array Methods
// Array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

// JavaaScript Array Methods: .map(), .filter(), .reduce()

//.map()
let a_names = groupOfNames.map( name => {
    if (name[0] == 'A') {
        return name
    } else {
        return false
    }
})

console.log(a_names)

//.reduce()
const nums = [2, 4, 6, 8, 10]
let numsReduced = nums.reduce( (accumulator, currentNum) => {
    return accumulator + currentNum
} )

console.log(numsReduced)

//.filter()
let longNames = groupOfNames.filter( name => name.length > 4 )

console.log(longNames)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()

console.log(groupOfNames.join('; '))

console.log(groupOfNames.slice(0,3))

let capturedValue = groupOfNames.splice(0,1,'Professor Oak')

console.log(`This was removed based on our splice: ${capturedValue}`)
console.log(groupOfNames)

function replaceEvenNames(replacement){
    // forloop to get names
    //replace the even indexes
    for(let i = 0; i < groupOfNames.length; i++){
        (i % 2 == 0) ? groupOfNames.splice(i,1, replacement) : groupOfNames[i]
    }

    return groupOfNames
}

console.log(replaceEvenNames('Goku'))

// .search() & .slice on array values that are strings

console.log(groupOfNames[0].search('k')) // gives the index of the first one found

console.log(groupOfNames[1].slice(0,groupOfNames[1].length - 1))