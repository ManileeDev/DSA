// Reverse a String 
let Str = "Hello"
let strArr = Str.split("")
function reverseArray(strArr) {
    let start = 0;
    let end = strArr.length - 1;
    while (start < end) {
        temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }
    return strArr.join("")
}
let revStr = reverseArray(strArr)

console.log(revStr)


//Palindrome
function isPalindrome(str) {
    let strArr = str.split("")
    let revStr = reverseArray(strArr)
    if (str === revStr) {
        return true
    }
    return false
}

console.log(isPalindrome("Mani"))


//Reverse Integer
let number = 8428148814
let numArr = number.toString().split("")
let revNumArr = reverseArray(numArr)
let revNum = parseInt(revNumArr)
console.log(revNum)


//Sentence Capitalization
const capitalize = (str) => {
    // let strArr = str.split(" ")
    // let capArr = []
    // for(let i = 0; i < strArr.length; i++){
    //     capArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    // }
    // return capArr.join(" ")  
    return str.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("helLo world"))

//fizzBuzz
const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

fizzbuzz(3)


