var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random(0) * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    return randomChosenColour;
}




$(`.${nextSequence()}`).fadeOut(100).fadeIn(100);


function playSound() {

    var color = nextSequence();

    switch(color) {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
    }
}

console.log(nextSequence())
playSound();