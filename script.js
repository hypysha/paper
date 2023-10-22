function getRandomObjectFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function playGame(user_value) {
    const myArray = ['🗿️️', '✂️', '📃️'];
    const computer = getRandomObjectFromArray(myArray);
    
    document.getElementById("computer").innerHTML = computer;
    document.getElementById("player").innerHTML = user_value;
    
    const results = {
        "🗿️️": {
          "✂️": "me",
          "📃️": "comp",
          "🗿️️": "both"
        },
        "✂️": {
          "📃️": "me",
          "🗿️️": "comp",
          "✂️": "both"
        },
        "📃️": {
          "🗿️️": "me",
          "✂️": "comp",
          "📃️": "both"
        }
    };
    
    const result = results[user_value][computer];
    
    if (result === "me") {
        document.getElementById("me").innerHTML++;
    } else if (result === "comp") {
        document.getElementById("comp").innerHTML++;
    } else if (result === "both") {
        document.getElementById("me").innerHTML++;
        document.getElementById("comp").innerHTML++;
    }
}

document.getElementById("papper_button").onclick = function() {
    playGame(document.getElementById("papper_button").innerHTML)
};
document.getElementById("stone_button").onclick = function() {
    playGame(document.getElementById("stone_button").innerHTML)
};
document.getElementById("scrissors_button").onclick = function() {
    playGame(document.getElementById("scrissors_button").innerHTML)
};