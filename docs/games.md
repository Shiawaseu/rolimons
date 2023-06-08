---
description: rolimons.games
---

# 🎮 Games

\
_THIS DOESNT SUPPORT GAMES WHICH AREN'T IN THEIR DATABASE_

### `.getInfo(<int> gameID>`

Get's info about the game

### Example usage

```javascript
// Get Game info exmaple
const rolimons = require("rolimons")

rolimons.games.getInfo(2753915549).then(function(game) {
    console.log(game.name, "is made by", game.creator_name)
})

// Output: Blox Fruits is made by Gamer Robot Inc
```

|        Returned Value       |             Description            |
| :-------------------------: | :--------------------------------: |
|        name \<string>       |              Game Name             |
|   creator\_name \<string>   | Name of the creator, or group name |
|      created \<string>      |          Self-Explanatory          |
|    max\_players \<string>   |          Self-Explanatory          |
|       genre \<string>       |          Self-Explanatory          |
|      players \<string>      |      Currently playing players     |
|       visits \<string>      |          Self-Explanatory          |
|       likes \<string>       |          Self-Explanatory          |
|      dislikes \<string>     |          Self-Explanatory          |
|    description \<string>    |          Self-Explanatory          |
|  like\_percentage \<string> |          Self-Explanatory          |
|     favorites \<string>     |          Self-Explanatory          |
| average\_playtime \<string> |       Average playtime session     |
|   last\_updated \<string>   |            Last Updated            |
