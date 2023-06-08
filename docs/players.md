---
description: rolimons.players
---

# 🕵♂ Players

## .getPlayer(\<int> ID)

Gets info about the player _(must be registered on Rolimons)_

### Example usage

```javascript
// Get Player Example
const rolimons = require("rolimons")

rolimons.players.getPlayer(540074852).then(function(player) {
    console.log(player.name + "'s last location was " + player.last_location)
})

// Output: SHlAWASE's last location was Website
```

|                                        |                                                                                                       |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| success \<boolean>                     | If operation is successful returns true, returns false if the player doesn't exist in their database. |
| name \<string>                         | User's name                                                                                           |
| value \<int>                           | User's value                                                                                          |
| rank \<int>                            | User's leaderboard rank, returns null if they're not ranked                                           |
| premium \<boolean>                     | Is user premium (?)                                                                                   |
| privacy\_enabled \<boolean>            | Is private inventory                                                                                  |
| terminated \<boolean>                  | Is terminated                                                                                         |
| stats\_updated \<id> \<UNIX TIMESTAMP> | Last time stats were updated                                                                          |
| last\_scan \<id> \<UNIX TIMESTAMP>     | Last inventory scan                                                                                   |
| last\_online \<id> \<UNIX TIMESTAMP>   | Last online                                                                                           |
| last\_location \<string>               | Last location                                                                                         |
| rolibadges \<array>                    | Array of the user's rolibadges                                                                        |

## .getLeaderboard(\<int> page>

Returns an entire page of the leaderboard

### Example Usage

<pre class="language-javascript"><code class="lang-javascript"><strong>// Get leaderboard example
</strong><strong>const rolimons = require("rolimons")
</strong>
rolimons.players.getLeaderboard(1).then(function(data) {
    // data[0] means the first, topmost user in that page
    console.log(data[0].name, "is the", data[0].rank, "rank")
})

// Output: Roblox is the #1 rank
</code></pre>

| Returned Value  | Description  |
| --------------- | ------------ |
| id \<id>        | User's ID    |
| name \<string>  | User's name  |
| rank \<string>  | User's rank  |
| value \<string> | User's value |
| rap \<string>   | User's RAP   |
