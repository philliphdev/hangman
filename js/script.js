// Game board functions
$(document).ready(function () {
    console.log('WE ARE BORG')
    const Hangman = {
        // build out the game board
        correctWord: function (word) {
            // get the word length and each character

        },

        // put the number of letters in correct word on the page
        correctLetters: function (word, letterChosen) {
            let letters = $('.wordLetters')
            letters.html = ('')
            for (i = 0; i < word.length; i++) {
                if (letterChosen === word[i]) {
                    letters.append(`
                    <p>${word[i]}</p>`)
                }
            }
        },

        // put selectable letters/alphabet on screen

        alphabet: function () {
            const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            let alphabetLetters = $('.alphabet')
            alphabetLetters.html = ('')
            for (i = 0; i < 26; i++) {
                alphabetLetters.append(`
        <p>${allLetters[i]}</p>`)
            }
        },




        // selectLetter: function(){
        //     const letterClicked = $('.alphabet').click(function(event){$(event.target).text()})
        //     console.log(letterClicked)
        // }

    }

    // get the letter the user clicks on from the alphabet
    $('.alphabet').click(function (event) {
        var letterClickedOn = $(event.target).text();
        console.log("letter clicked " + letterClickedOn)
        Hangman.correctLetters("HELLO", letterClickedOn)

    })
    Hangman.correctLetters("HELLO")
    Hangman.alphabet()
    const letterClicked = $('.alphabet').click(function (event) { $(event.target).text() })




})



// window.onload = function() {
// // Array function to hold the correct word
// console.log('WE ARE BORG!')


// }