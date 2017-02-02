"playerChat": (player, text) =>
    {
        text = "<b>" + player.name + "</b> said : " + text;
        player.outputChatBox(text)
    }
