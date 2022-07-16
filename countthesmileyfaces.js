// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let counter = 0
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i], arr[i].length)
        for(j=0; j<=arr[i].length-1; j++){
            // console.log(arr[i][j])
        }
        if(arr[i].length == 2){
           if(  (arr[i][0] == ':' ||  arr[i][0] == ';') && (arr[i][1] == ')' || arr[i][1] == 'D')    ){
                // console.log('Valid Smiley')
                console.log(`${arr[i]} is a Valid Smiley`)
                counter++
           } else {
            // console.log('Invalid Smiley')
            console.log(`${arr[i]} is an Invalid Smiley`)
           }
        } else if(arr[i].length == 3){
            if(  (arr[i][0] == ':' || arr[i][0] == ';') && (arr[i][1] == '-' || arr[i][1] == '~') && (arr[i][2] == ')' || arr[i][2] == 'D')  ){
                // console.log('Valid Smiley')
                console.log(`${arr[i]} is a Valid Smiley`)
                counter++
            } else {
                // console.log('Invalid Smiley')
                console.log(`${arr[i]} is an Invalid Smiley`)
            }
        } else {
            console.log(`${arr[i]} has invalid length and also an Invalid Smiley`)
        }
    }
    console.log(`There are ${counter} valid smileys`)
}
countSmileys([':)', ';(', ';}', ':-D', ';)', ';)))', ';~D'])
console.log('========')
countSmileys([':)', ';(', ';}', ':-D'])
console.log('========')
countSmileys([';D', ':-(', ':-)', ';~)'])
console.log('========')
countSmileys([';]', ':[', ';*', ':$', ';-D'])