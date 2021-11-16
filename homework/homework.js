// Exercise 1

// Write a function that takes in the string and the list of dog names,
//loops through the list and checks that the current name is in the
//string passed in. The output should be "Matched dog_name" if name
//is in the string, if no matches are present console.log "No Matches"
let dog_string = "Hello Max, my name is Dog, and i have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(alist, astring){
    for(let word = 0; word < alist.length ; word++)
        if (astring.search(alist[word]) != -1) {
            console.log(`matched ${alist[word]}`);
        } else {
            console.log(`No matches for ${alist[word]}`);
        }    
}

console.log(findWords(["Max", "HAS", "PuRple", "dog"], "Hello Max, my name is Dog, and i have purple eyes!"))

// Exercise 2

// Write a function that takes in an array and removes every
//even index and replaces it with the string "even index"

let givenArr = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

function replaceNames(replacement){
    for(let i = 0; i < givenArr.length; i++){
        (i % 2 == 0) ? givenArr.splice(i, 1, replacement): givenArr[i]
    }
    return givenArr
}

console.log(replaceNames('even index'))


// Two Code wars problems 👇

// Write a function that takes an integer and returns "even"
// for an even integer and "Odd" for an odd integer

function evenOrOdd(num){
    if (num % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOrOdd(5))


// Very simple, given a number find its opposite.

function opposite(num){
    return ((num) * -1)
}

console.log(opposite(5))