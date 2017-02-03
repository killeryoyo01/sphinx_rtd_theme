"veh": (player, args) => // on command
	{
		var pos = player.position; //gets the position of the player
		
		if(player.veh)
			player.veh.destroy(); // destroys a existing vehicle if the he spawn one from the last time
		
		player.veh = mp.vehicles.new(mp.joaat(args[1]), pos); // defining the player.veh

			player.veh.dimension = player.dimension; // defining the dimension of the player
		player.putIntoVehicle(player.veh, 0); // puts the player in the Vehicle
	},
