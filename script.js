
document.getElementById("papper_button").onclick = function() {myFunction(document.getElementById("papper_button").innerHTML)};
document.getElementById("stone_button").onclick = function() {myFunction(document.getElementById("stone_button").innerHTML)};
document.getElementById("scrissors_button").onclick = function() {myFunction(document.getElementById("scrissors_button").innerHTML)};

function getRandomObjectFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function myFunction(user_value) {
    let myArray = ['🗿️️', '✂️', '📃️'];


    
    document.getElementById("computer").innerHTML = getRandomObjectFromArray(myArray);
    document.getElementById("player").innerHTML = user_value;

    let computer = document.getElementById("computer").innerHTML

    if (user_value == '🗿️️' && computer == '✂️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
    } else if (user_value == '🗿️️' && computer == '📃️') {
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    } else if (user_value == '🗿️️' && computer == '🗿️️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    }

    if (user_value == '✂️' && computer == '📃️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
    } else if (user_value == '✂️' && computer == '🗿️️') {
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    } else if (user_value == '✂️' && computer == '✂️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    }

    if (user_value == '📃️' && computer == '🗿️️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
    } else if (user_value == '📃️' && computer == '✂️') {
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    } else if (user_value == '📃️' && computer == '📃️') {
        document.getElementById("me").innerHTML  = Number(document.getElementById("me").innerHTML) + 1
        document.getElementById("comp").innerHTML  = Number(document.getElementById("comp").innerHTML) + 1
    }
}