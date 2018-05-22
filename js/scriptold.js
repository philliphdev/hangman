// Game board functions
// $(document).ready(function () {
//     console.log('WE ARE BORG')
const randomWord = ['PICKARD', 'KIRK', 'CRUNCH', 'MORGAN', 'SPARROW' ]
const Hangman = {
    // build out the game board 





    getWordInPlay: function () {
        var largeNumber = Math.random()
        var randomNumber = Math.floor(largeNumber * 5)
        const WordInPlay = randomWord[randomNumber]
        console.log('Line 16 ' + randomNumber)
        console.log("Word " + WordInPlay)
        Hangman.correctLetters(WordInPlay, '')
    },


    // put the number of letters in correct word on the page in order
    //    const PlayGame = {
    correctLetters: function (word, letterChosen) {
        console.log("line 22 " + word, letterChosen)
        let letters = $('.wordLetters')
        letters.html = ('')
        if (letterChosen === '') {
            letters.html = ('')
            this.alphabet()
            for (i = 0; i < word.length; i++) {
                let letterClass = "id = letter" + i
                letters.append(`
                    <p ${letterClass}>_</p>
                    `)
            }
        } else {
            for (i = 0; i < word.length; i++) {
                if (letterChosen === word[i]) {
                    let test = "#letter" + i
                    $(test).html(`
                        ${word[i]}`)
                    console.log("hmmm " + test)
                }
            }
        }
    },

    // put underscores for letters in word

    underscoreForCorrectWord: function (WordInPlay) {

        if (WordInPlay === "") {
            let letters = $('.wordLetters')
            letters.html = ('')
            for (i = 0; i < WordInPlay.length; i++) {
                if (letterChosen === WordInPlay[i]) {
                    letters.append(`
                    <p>${WordInPlay[i]}</p>`)
                }
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
        $('.alphabet').click(function (event) {
            var letterClickedOn = $(event.target).text();
            console.log(" line 73 letter clicked " + this.WordInPlay + letterClickedOn)
            Hangman.correctLetters(this.WordInPlay, letterClickedOn)

        })
    },

}




window.onload = function () {
    // // Array function to hold the correct word
    console.log('WE ARE BORG!')
    $('#start').click(Hangman.getWordInPlay())
    

}