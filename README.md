
<p align="center">
  <img src="https://images-ext-2.discordapp.net/external/FCOj4u6lhFftRcr9iFT9TTgwqXNUdGyfc2THAclGkII/https/cdn.discordapp.com/icons/439980323263086602/ec5023bb9ca40c98785d505b2335ca67.png" alt="Rolimons"/>
</p>

# Rolimons
- A High-level API Wrapper for Rolimons

# Docs are available [here](https://shiawase.gitbook.io/rolimons-api-wrapper-docs/)
- If you want to contribute to docs [here](https://app.gitbook.com/invite/T0ZEwIdQo6bvNx27b3IB/cQ8kSe0SIXzmoVb0zsx0)

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
- Items (limited data **[USES CACHING]** & uuid tracking)
- Markets (trade ads)
- Groups
- Games
- players & leaderboard

## To-Do
- Add gamepasses to games API `getInfo` data
- Support interacting with the website (post trade ads)
