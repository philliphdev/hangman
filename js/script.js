// Game board functions
$(document).ready (function(){
    console.log('WE ARE BORG')
const Hangman = {
    // build out the game board
    correctWord: function(word){
        // get the word length and each character
        
    },

    // put the number of letters in correct word on the page
    correctLetters: function(word){
        let letters = $('.wordLetters')
        letters.html = ('')
        for(i = 0; i < word.length; i++){
            letters.append(`
        <p>${word[i]}</p>`)
        }
    }
  
}
Hangman.correctLetters("hellothere")
})



// window.onload = function() {
// // Array function to hold the correct word
// console.log('WE ARE BORG!')


// }