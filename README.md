
<p align="center">
  <img src="/assets/Icon.png" alt="Rolimons"/>
</p>

# Rolimons
- API-Wrapper for the [Rolimons](https://rolimons.com) website

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
