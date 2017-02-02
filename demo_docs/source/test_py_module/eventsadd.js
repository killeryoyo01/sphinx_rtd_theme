function onPlayerDeath(player, reason, killer)
{
    console.log(player.name + " died.");
}

mp.events.add(
{
    "playerJoin" : player =>
    {
         console.log("New player: " + player.name);
    },

    "playerQuit" : (player, reason) =>
    {
         console.log(player.name + " quit");
    },

    "playerDeath" : onPlayerDeath
});
