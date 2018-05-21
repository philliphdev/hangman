# hangman
MVP
gameboard:
  - picture of the hangman and gallow
  - instructions on how to play
  - place for word subject
  - blank area under hangman for each letter of current word
  - the alphabet for users to select letters from
  - moves left
  
  gameplay:
    - user clicks play
    - random word is selected
    - word subject is displayed to the user
    - alphabet is loaded with letters available to select
    - user clicks a letter
    - game checks to see if the letter is in the word in any spot(s)
      - if letter is in the word 
        - populates the word with the letters(s)
        - disables the letter from the alphabet so user cannot select it again 
      if letter is NOT in the word
        - 1 point against the user is counted
        - add a body part to the hangman
   
   - if the number of incorrect choices reaches 6
      - add a body part to the hangman
      - the users looses
   - if the word is complete before the user reaches 6 incorrect choices
      - display winner
      - display button - play again
       - if user clicks play again
       - reset board keep last score
