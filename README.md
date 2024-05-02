
<p align="center">
  <img src="/assets/Icon.png" alt="Rolimons"/>
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
        if (!item) return;
        console.log(item.name, "which is also known as", item.acronym, "has a demand of", item.demand)
})
```

## Covered endpoints
- Items (**+ Caching**) & UAID tracking
- Market Activity (trade ads)
- Groups
- Games
- Players & Leaderboard
