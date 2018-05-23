$(document).ready(function () {
    console.log('WE ARE BORG!')
    var incorrectChoiceCounter = 6
    var disableLetterClick = 0
    var correctLetters = 0
    var letterMatch = 'no'
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
                let letterClass = "id=letter" + i
                letters.append(`<p ${letterClass}>_</p>`)
            }
            this.lettersRemaining(wordInPlay)


            return wordInPlay
        }, // end of GetWordInPlay

        updateChoicesLeft: function (num) {
            console.log("line 28 " + num)
            let counter = "#choicesLeftCounter"
            if (num != 99) { 
                $(counter).html(`${num}`)
            }
            if (num === 0 | num === 99) {
                console.log("line 35 " + num)
                $('.alphabet').css('pointer-events', 'none')
            }

        },

        lettersRemaining: function (word) {
            $('.letters').click(function (event) {
                var letterClickedOn = $(event.target).text()
                console.log("Line 29 you clicked on " + letterClickedOn)

                let letters = $('.wordLetters')
                letters.html = ('')

                for (i = 0; i < word.length; i++) {
                    if (letterClickedOn === word[i]) {
                        letterMatch = "YES"
                        correctLetters++
                        let letter = "#letter" + i
                        $(letter).html(`${word[i]}`)
                        console.log("hmmm line 38  " + letter)
                    }

                    $('#' + letterClickedOn).addClass("fade")
                    $('#' + letterClickedOn).css('pointer-events', 'none')
                    console.log("Line 54" + letterClickedOn + i)
                }
                console.log("line 48 drop out of for loop " + letterMatch)
                if (word.length === correctLetters) {
                    console.log("You win!")
                    var disableLetterClick = 99
                    Hangman.updateChoicesLeft(disableLetterClick)
                    $('.winner').toggleClass('d-none', false)
                }

                if (letterMatch === "YES") {
                    letterMatch = "NO"
                } else {
                    incorrectChoiceCounter--
                    letterMatch = "NO"
                    Hangman.updateChoicesLeft(incorrectChoiceCounter)
                }

            })
        },  // End of lettersRemaining

        // put selectable letters/alphabet on screen

        alphabet: function () {
            const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            let alphabetLetters = $('.alphabet')
            alphabetLetters.html = ('')
            for (i = 0; i < 26; i++) {
                alphabetLetters.append(`
                <p class="letters" id=${allLetters[i]}>${allLetters[i]}</p>`)
            }
        },  // end of alphabet

        playGame: function () {
            incorrectChoiceCounter = 6
            disableLetterClick = 0
            correctLetters = 0
            Hangman.updateChoicesLeft(incorrectChoiceCounter)
            $(".letters").remove()
            $(".wordLetters").children().remove()
            $('.alphabet').css('pointer-events', 'auto')
            Hangman.getWordInPlay()
            $('.incorrectChoices').toggleClass('d-none', false)
            $('#wordSubject').toggleClass('d-none', false)
            $('.winner').toggleClass('d-none', true)

        }  // end playGame



    } // end of Hangman
    $('#start').click(Hangman.playGame)
})

// window.onload = function () {
//     // Array function to hold the correct word
//     console.log('WE ARE BORG!')
    // $('#start').click(Hangman.playGame())

// }


