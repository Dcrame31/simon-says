var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random(0) * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    $("h1").text(`Level ${level}`);


    level += 1;
}


function playSound(name) {

    var name = new Audio(`sounds/${name}.mp3`);
    name.play();
}

function animatePress(currentColour) {

    $(`#${currentColour}`).addClass("pressed")

    setTimeout(function () {
        $(`#${currentColour}`).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel) {
    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")

        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {
        $("body").addClass("game-over");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        playSound("wrong");
        startOver();
        $("#level-title").text("Game Over, Press Any Key to Restart");

    }
};

function startOver() {
    level = 0;
    gamePattern = [];
}

  

$("div .btn").click(function(event) {
    var userChosenColour = event.target.id;

    console.log(userChosenColour)
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);


})

$(document).keypress(function() {
    nextSequence();
});


