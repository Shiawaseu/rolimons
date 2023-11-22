---
description: rolimons.Groups
---

# 🧑🤝🧑 Groups

\
_THIS DOESNT SUPPORT GROUPS WHICH AREN'T IN THEIR DATABASE_

### `.getInfo(<int> groupID>`

Get's info about the group

### Example usage

```javascript
// Get Group info exmaple
const rolimons = require("rolimons")

rolimons.groups.getInfo(3959677).then(function(group) {
    console.log(group.name, "is made by", group.owner)
})

// Output: BIG Games Pets is made by BuildIntoGames

```

<table><thead><tr><th>Returned Value</th><th>Description</th><th data-hidden></th></tr></thead><tbody><tr><td>owner_id &#x3C;int></td><td>Owner ID</td><td></td></tr><tr><td>owner &#x3C;string></td><td>Owner name</td><td></td></tr><tr><td>members &#x3C;string></td><td>Member count</td><td></td></tr><tr><td>created &#x3C;string></td><td>Created since</td><td></td></tr><tr><td>tracked_since &#x3C;string></td><td>Tracked since</td><td></td></tr><tr><td>past_day_growth &#x3C;string></td><td>Past day new members</td><td></td></tr><tr><td>last_scan &#x3C;string></td><td>Last scan since</td><td></td></tr></tbody></table>
