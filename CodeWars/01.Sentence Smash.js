function smash(words) {
  
    let newWord = '';
 
    for (i = 0; i < words.length; i++) {
        newWord += words[i]+ ' ';  
    } 

    newWord = newWord.trim();
    console.log(newWord);
    //return (newWord)
};
smash(['hello', 'world', 'this', 'is', 'great']);




















// function digitize(n) {

//     let myNumber = n.toString();
//     let print =  myNumber.toString().split('').reverse().join(', ');
//     let newArr = [print];
//     console.log(newArr);
// }
// digitize(35231);