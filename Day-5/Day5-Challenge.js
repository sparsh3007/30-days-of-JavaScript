/*
## Challenge 5: 
Write a JavaScript exercise to get the filename extension.
*/
function getFilenameExtesnion(filename){
    let filenameArr= filename.split('.')
    /* Method 1
    return filenameArr[filenameArr.length-1]
    */
    /* Method 2
    return filenameArr.slice(-1)[0]    
    */
    /* Method 3 */
    return filenameArr.pop()

}
let filename1="test.js"
console.log(getFilenameExtesnion(filename1))
let filename2="abc.html"
console.log(getFilenameExtesnion(filename2))