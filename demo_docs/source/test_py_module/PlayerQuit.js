function playerQuitHandler(player, exitType, reason) {
  if (exitType != "kicked") {
    var str = player.name + " quit.";
  } else {
    var str = player.name + " kicked. Reason: " + reason + ".";
  }
  console.log(str);
}

mp.events.add("playerQuit", playerQuitHandler);
