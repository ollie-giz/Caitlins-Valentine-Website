var Randomized_Comment = ["TRY AGAIN LOSER!", "NUH UH", "HEY CHOOSE AGAIN!", "YOU THINK YOU CAN JUST SAY NO?", "OH! SO THATS HOW IT IS HUH?","FINE THEN D:<", "GRRRRR", "WOOF WOOF WOOF!", ":(", ">:(", ">:O", "HEY STOP!", "BRUH"]

function No() {
    console.log("Printing")
    var Comment_Number = Math.floor(Math.random() * 13)
    document.getElementById("no_button").innerHTML = Randomized_Comment[Comment_Number]; 
    console.log("Printed")
}

function Yes() {
    window.location = "Yay.html";
}