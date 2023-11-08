function CapitalizeFirstLetter(str){
    let words=str.split(" ")
    let ans=""
    for(let i=0;i<words.length;i++){
        ans=ans+words[i].substr(0,1).toUpperCase()+words[i].substring(1)+" "
    }
    return ans;
}

let test="the quick brown fox"
console.log(CapitalizeFirstLetter(test))