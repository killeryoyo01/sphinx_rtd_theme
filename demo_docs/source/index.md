**Paramters**:

- `player`: it is the player which left to the server.

-  `exitType`:  Types of Exit:

-  **disconnect**

-  **timeout**

-  **kicked**

- `reason` The reason why the player disconnected/left.
 

---------


Example:

```js
function playerQuitHandler(player, exitType, reason) {
  if (exitType != "kicked") {
    var str = player.name + " quit.";
  } else {
    var str = player.name + " kicked. Reason: " + reason + ".";
  }
  console.log(str);
}
mp.events.add("playerQuit", playerQuitHandler);
```
---------
