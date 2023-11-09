/* ## Challenge 3:
Write a JavaScript program to check whether 
two given integer values are in the range 50..99 (inclusive). 
Return true if either of them falls within the range.
*/
function checkRange(num1,num2){
    if((num1>=50 && num1<=99) || (num2>=50 && num2<=99)){
        return true
    }
    return false
}
console.log(checkRange(67,68))
console.log(checkRange(67,35))
console.log(checkRange(12,95))
console.log(checkRange(45,35))