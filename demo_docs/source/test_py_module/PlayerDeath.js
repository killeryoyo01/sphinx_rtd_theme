"playerDeath": (player, reason, killer) => {
            if(killer)
            {
                player.outputChatBox("You were killed By:"+ reason + killer.name);
            }
            player.spawn(new mp.Vector3(-243,6326,33));
}
