
<p align="center">
  <img src="https://images-ext-2.discordapp.net/external/FCOj4u6lhFftRcr9iFT9TTgwqXNUdGyfc2THAclGkII/https/cdn.discordapp.com/icons/439980323263086602/ec5023bb9ca40c98785d505b2335ca67.png" alt="Rolimons"/>
</p>

# Rolimons
- API-Wrapper for the [Rolimons] website

# Docs are available [here](https://shiawase.gitbook.io/rolimons-api-wrapper-docs/) or visit `docs` in the root of this repository.

## Installation
```
npm install rolimons
```

## Example usage
```javascript
const rolimons = require("rolimons")

rolimons.items.searchItem("name", "SSHF").then(
    function(item) {
        console.log(item.name, "which is also known as", item.acronym, "has a demand of", item.demand)
    })

```

## Covered endpoints
- Items | limited data **[USES CACHING]** & uuid tracking (see the docs for examples of how caching works)
- Market (trade ads)
- Groups
- Games
- Players & Leaderboard

## To-Do
- Add gamepasses to games API `getInfo` data
- Support interacting with the website (post trade ads, user verification, etc.)
