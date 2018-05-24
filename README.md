# Hangman
# Project 1 description
For this project I selected to write a Hangman game where the user can click play to load a random word to guess.  It has a theme for guessing famous captain names which is displayed as a hint. When the user clicks play the game is loaded with the alphabet of letters to choose from while guessing what the captains name is.  If the letter clicked matches any of the letters in the hidden word those letters are filled in. If the letter clicked doesn't match any letters in the hidden word 1 of the 6 pieces of the picture is filled in each time with the incorrect choices number updated to display how many incorrect choices they have left.  Once a letter in the alphabet is clicked it is no longer available for selecting. If the word is guessed before using all 6 incorrect choices the game is won, however if the incorrect choices reaches 0 of 6 the hangman picture is displayed and game over.  The user can click the play button to play again or refresh the page. I chose to keep it clean and simple with minimal dressings.
 
Hangman site: http://stupefied-spence-fd243a.bitballoon.com/

Link to project user stories and tracking on Trello: https://trello.com/b/N6GGSoBQ/project-1-hangman

Link to wireframe: https://github.com/philliphdev/hangman/blob/master/WireframeUpdate.png

Technologies used in creating this project:
   - HTML, CSS and JavaScritp
   - JQuery
   - Bootstrap
   - Animate.css
   - MS PowerPoint for wireframe


gameboard:
  - hidden picture of the hangman
  - instructions on how to play
  - hint for word subject
  - blank area under hangman for each letter of current word
  - the alphabet for users to select letters from
  - incorrect choices left
  
  
gameplay:
  - user clicks play
  - random word is selected
  - word hint is displayed to the user
  - alphabet is loaded with letters available to select
  - user clicks a letter
  - game checks to see if the letter is in the word in any spot(s)
  - if letter is in the word 
      - populates the word with the letters(s)
      - disables the letter from the alphabet so user cannot select it again 
    if letter is NOT in the word
      - 1 point against the user is counted
      - reveal a part of the 6 pieces of the game over hangman picture
   - if the word is complete before the user reaches 6 incorrect choices
      - displays winner
      - if user clicks play again
      - reset board load new random word


future enhancements:
  - level selection
  - category selection with matching design theme
  - allow the user to click show answer
  
