mp.events.add('playerCommand', (player, command) => {
  let arr = command.split(' ');
  if (arr[0] == 'getclothes') {
    if (arr.length < 2 || !parseInt(arr[1])) {
      return player.outputChatBox('Use syntax: /getclothes [component_id]');
    } else {
      let clothes = player.getClothes(parseInt(arr[1]));
      player.outputChatBox('drawable: ' + clothes.drawable + ' texture: ' + clothes.texture + ' palette: ' + palette.texture);
    }
  }
});
