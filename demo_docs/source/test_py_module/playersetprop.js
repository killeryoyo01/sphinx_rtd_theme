mp.events.add('playerCommand', (player, command) => {
  let arr = command.split(' ');
  if (arr[0] == 'setprop') {
    if (arr.length < 4 || !parseInt(arr[1]) || !parseInt(arr[2]) || !parseInt(arr[3])) {
      return player.outputChatBox('Use syntax: /setprop [prop_id] [drawable_id] [texture_id]');
    } else {
      player.setProp(parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]));
    }
  }
});
