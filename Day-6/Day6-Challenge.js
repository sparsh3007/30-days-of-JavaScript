/*
**Challenge 6**  
Write a JavaScript program to compute the sum of the two given integers. 
If the two values are the same, then return triple their sum.
*/
function computeSum(num1,num2){
    let sum=num1+num2
    if(num1==num2){
        sum*=3
    }
    return sum
}
let num1=4
let num2=4
console.log(computeSum(num1,num2))

num1=6
num2=5
console.log(computeSum(num1,num2))

