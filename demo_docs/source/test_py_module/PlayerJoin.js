 function playerJoinHandler(player) {
    console.log(player.name + " join.");
  }

  mp.events.add("playerJoin", playerJoinHandler);
