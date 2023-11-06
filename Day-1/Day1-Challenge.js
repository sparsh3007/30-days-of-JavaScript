function reverse(num){
    let rev=0;
    while(num>0){
        rev=rev*10+num%10
        num=Math.floor(num/10);
    }
    return rev
}
let num=32243
console.log("Original number",num)
console.log("Reversed number",reverse(num))