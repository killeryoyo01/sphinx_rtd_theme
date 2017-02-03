mp.events.add('playerCommand', (player, command) => {
  let arr = command.split(' ');
  if (arr[0] == 'weapon') {
    player.giveWeapon(3220176749, 1000); // Assault Rifle
  }
});
