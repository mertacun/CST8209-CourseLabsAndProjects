start();

let game = {
  wood: 0,
  marshmallows: 3,
  fire: false,
  tent: false,
};

function help() {
  console.log("Here is a list of the commands:");
  console.log("help - Game instructions and possible commands");
  console.log("pitch - Pitch the tent");
  console.log("search - Search for wood");
  console.log("tend - Start or stop the fire");
  console.log("roast - Roast marshmallows");
  console.log("sleep - Sleep and end the game");
};

function pitch() {
  if (!game.tent) {
    game.tent = true;
    return "You pitched the tent!";
  } else {
    return "You have already pitched a tent!";
  }
};

function search() {
  if (!game.fire) {
    game.wood++;
    return "You found some woods!";
  } else {
    return "Searching for wood is not possible while the fire is still burning!";
  }
};

function tend() {
  if (!game.fire) {
    if (game.wood > 0) {
      game.fire = true;
      game.wood--;
      return "You started the fire!";
    } else {
      return "You don't have enough wood to start the fire!";
    }
  } else {
    game.fire = false;
    return "You stopped the fire!";
  }
};

function roast() {
  if (game.fire && game.marshmallows > 0) {
    game.marshmallows--;
    return "You roasted a marshmallow!";
  } else if (!game.fire) {
    return "You have to start the fire to roast marshmallows!";
  } else {
    return "You are out of marshmallows!";
  }
}

function sleep() {
  if (game.tent && game.fire) {
    console.log("You went to sleep and ended the game!");
    game.wood = 0;
    game.marshmallows = 3;
    game.fire = false;
    game.tent = false;
  } else {
    console.log("You can't go to sleep. Ensure you have both a tent and a fire!");
  }
};

function start() {
  console.log("Welcome to the Game!");
  help();
}