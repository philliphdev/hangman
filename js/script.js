
const Hangman = {
    getWordInPlay: function () {
        const randomWord = ['PICKARD', 'KIRK', 'CRUNCH', 'MORGAN', 'SPARROW']
        let largeNumber = Math.random()
        let randomNumber = Math.floor(largeNumber * randomWord.length)
        console.log("line 7 " + randomNumber)
        const wordInPlay = randomWord[randomNumber]
        console.log(wordInPlay)
        this.alphabet()
            // put underscores for letters in wordInPlay
        let letters = $('.wordLetters')
        letters.html = ('')        
        for (i = 0; i < wordInPlay.length; i++) {
            let letterClass = "id = letter" + i
            letters.append(`
                <p ${letterClass}>_</p>
                `)
        }

        
        return wordInPlay
    }, // end of GetWordInPlay

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
            // console.log(" line 73 letter clicked " + this.WordInPlay + letterClickedOn)
            // Hangman.correctLetters(this.WordInPlay, letterClickedOn)
            return
        })
    },  // end of alphabet



} // end of Hangman

window.onload = function () {
    // // Array function to hold the correct word
    console.log('WE ARE BORG!')
    $('#start').click(Hangman.getWordInPlay())

}