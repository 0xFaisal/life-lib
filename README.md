# life-lib
 
## Important information!


- Life Lib [ A framework of discord.js ] 

## How i can install it?

Write ``npm install life-lib`` in your npm console! <br/>
and don't forget install discord.js ! ``npm install discord.js``

## How i can use this library?

Before anything you need to put your client information like token and like this (:
```js
lifelib.login({"token": "your bot token", "game": "game tt", "type": "WATCHING", "ownerID": " OWNER ID "})
```
## Examples!
ping pong example
"
```js
var lifelib = require('lifelib')
lifelib.login({"token": 'token', "game": "typeanythingelse", "type": "WATCHING", "ownerID": "your id!"})

mylib.onReady( 
console.log('yes!'),
console.log('yes2')
)

lifelib.addmessage({
        'message': 'ping',
        'reply': 'pong',
        'options': {"guildonly": "true","owneronly": false},
        'spam': 5000,
        'spamMessage': "Wait 5 sec"
})
```

create broadcast command!
```js
lifelib.addmessage({
        'message': '-bc',
        'reply': 'Please wait to send this message for all guild members (:',
        'options': {"type": "bc","offline": false, "guildOnly": true},
        'spam': 5000,
        'spamMessage': "Wait 5 sec"
})
```
if you need to check if user have permission to give him role or anything you can do this

```js
lifelib.addmessage({
        'message': '-givemytestrole',
        'reply': 'Done!',
        'options': {"owneronly": false, "guildonly": false, "addRole": "test", "permissions": "MANAGE_GUILD"},
        'spam': 5000,
        'spamMessage': "Wait 5 sec",
        "permissionsMSG": "you don't have permission MANAGE_GUILD!"
})
```

## About me (:
- Faisal Al-Mutery 
- NodeJS Developer .. 
- https://faisaldev.me
- me@faisaldev.me
- twitter.com/xfaisal49
