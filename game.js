// create array of words
var words = ["mocha", "frappuccion","latte","espresso"]

// choose word at random
var ranNumber = Math.floor(Math.random()* words.length);
var choosenWord = words[ranNumber];
var underScore = [];
// create underscores based on word length
var generateUndersconre = () =>  {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// get users choice 
document.onkeyup = function(event) {
    console.log(event);
}
// users guess
// check if guess is right 
// if right push to right array
// if worng push to wrong array 