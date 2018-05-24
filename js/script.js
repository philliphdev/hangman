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
            const wordInPlay = randomWord[randomNumber]
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
            let counter = "#choicesLeftCounter"
            if (num != 99) {
                $(counter).html(`${num}`)
                let imageId = "#part" + (num + 1)
                Hangman.displayStatusOfImages(num + 1)
            }
            if (num === 0 | num === 99) {
                $('.alphabet').css('pointer-events', 'none')
            }

        },

        lettersRemaining: function (word) {
            $('.letters').click(function (event) {
                var letterClickedOn = $(event.target).text()
                let letters = $('.wordLetters')
                letters.html = ('')
                for (i = 0; i < word.length; i++) {
                    if (letterClickedOn === word[i]) {
                        letterMatch = "YES"
                        correctLetters++
                        let letter = "#letter" + i
                        $(letter).html(`${word[i]}`)
                    }
                    $('#' + letterClickedOn).addClass("fade")
                    $('#' + letterClickedOn).css('pointer-events', 'none')
                }
                if (word.length === correctLetters) {
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
            $('.grid-container').children().remove()
            Hangman.displayStatusOfImages("blank")


        },  // end playGame

        displayStatusOfImages: function (status) {
            switch (status) {
                case "blank":
                    let imageSrc = $('.grid-container');
                    imageSrc.html = '';
                    for (var i = 1; i < 7; i++) {
                        imageSrc.append(`
                    <img src="img/blank.png" id="part${i}" class="grid-item">
                    `)
                    }
                    break
                case 6:
                    $("#part6").replaceWith(`
                    <img src="img/imagepart6.png" id="part6" class="grid-item">
                    `)
                    break
                case 5:
                    $("#part2").replaceWith(`
                    <img src="img/imagepart2.png" id="part2" class="grid-item">
                    `)
                    break
                case 4:
                    $("#part5").replaceWith(`
                    <img src="img/imagepart5.png" id="part5" class="grid-item">
                    `)
                    break
                case 3:
                    $("#part1").replaceWith(`
                    <img src="img/imagepart1.png" id="part1" class="grid-item">
                    `)
                    break
                case 2:
                    $("#part4").replaceWith(`
                    <img src="img/imagepart4.png" id="part4" class="grid-item">
                    `)
                    break
                case 1:
                    $("#part3").replaceWith(`
                    <img src="img/imagepart3.png" id="part3" class="grid-item">
                    `)
                    break

            }


        } // end of display status of images


    } // end of Hangman
    $('#start').click(Hangman.playGame)
})



