// TO GENERATE RANDOM NUMBERS
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1
// randomNumber1


// TO CHANGE IMAGES AT IMG1 AND IMG2
var new_img1 = "images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", new_img1)
var new_img2 = "images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", new_img2)



if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").textContent= "Draw!"
}
else if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent= "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").textContent= "Player 2 Wins!🚩"
}