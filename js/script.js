// Game board functions
// $(document).ready(function () {
//     console.log('WE ARE BORG')
    const Hangman = {
        // build out the game board 

        
        randomWords: function () {
            // get a random word and populate the correct word
            const randomWord = [{
                word: "MURRAY",
                subject: "Last name of an actor in the movie Ground Hog",
                hint: "Rhymes with hurry "
            },
            {
                word: "SOLO",
                subject: "Captain of the millennial falcon",
                hint: "His best friend is a wookie"
            },
            {
                word: "YODA",
                subject: "Smallest of the Jedi Masters",
                hint: "Might be right are you"
            },
            {
                word: "EASTWOOD",
                subject: "The Good Bad and Ugly",
                hint: "Paint the whole town red"
            },
            {
                word: "MERKEL",
                subject: "American Princess",
                hint: "She is on the hit TV series Suits"
            },

            ]

        },

        getWordInPlay: function () {
            // const WordInPlay = 'MURRAY'
        console.log("Word " + WordInPlay)
        },


        // put the number of letters in correct word on the page in order
    //    const PlayGame = {
        correctLetters: function (word, letterChosen) {
            console.log(word, letterChosen)
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

        underscoreForCorrectWord: function (word) {

            if (word === "") {
                let letters = $('.wordLetters')
                letters.html = ('')
                for (i = 0; i < word.length; i++) {
                    if (letterChosen === word[i]) {
                        letters.append(`
                    <p>${word[i]}</p>`)
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
                console.log("letter clicked " + letterClickedOn)
                Hangman.correctLetters("MURRAY", letterClickedOn)
        
            })
        },

    }




window.onload = function() {
// // Array function to hold the correct word
console.log('WE ARE BORG!')
$('#start').click(Hangman.correctLetters("MURRAY",''))

}