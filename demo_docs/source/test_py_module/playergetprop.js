mp.events.add('playerCommand', (player, command) => {
  let arr = command.split(' ');
  if (arr[0] == 'getprop') {
    if (arr.length < 2 || !parseInt(arr[1])) {
      return player.outputChatBox('Use syntax: /getprop [prop_id]');
    } else {
      let prop = player.getProp(parseInt(arr[1]));
      player.outputChatBox('drawable: ' + prop.drawable + ' texture: ' + prop.texture);
    }
  }
});
