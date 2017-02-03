mp.events.add('playerCommand', (player, command) => {
  let arr = command.split(' ');
  if (arr[0] == 'setclothes') {
    if (arr.length < 5 || !parseInt(arr[1]) || !parseInt(arr[2]) || !parseInt(arr[3]) || !parseInt(arr[4])) {
      return player.outputChatBox('Use syntax: /setclothes [component_id] [drawable_id] [texture_id] [palette_id]');
    } else {
      player.setClothes(parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]));
    }
  }
});
