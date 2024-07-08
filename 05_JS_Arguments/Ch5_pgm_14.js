var showLine = function (length) {
    var line = "******************************"; // a long string of asterisks
    console.log(line.substring(0, length));
};

var showPlayerName = function (playerName) {
    var nameLength = playerName.length;
    var boxWidth = nameLength + 4; // Adding 4 for the spaces and the border

    showLine(boxWidth);
    console.log("* " + playerName + " *");
    showLine(boxWidth);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    showLine(28); // A line for separation

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine(28); // A line for separation
    console.log("");
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
