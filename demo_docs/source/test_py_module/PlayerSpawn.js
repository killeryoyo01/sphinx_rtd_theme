mp.events.add('playerJoin', player => {
  player.model = mp.joaat('player_zero');
  player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
});
