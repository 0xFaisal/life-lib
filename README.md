# life-lib
 
## Important information!


- Life Lib [ A framework of discord.js ] 

## How i can install it and run my bot?

Write ``npm install life-lib`` in your npm console!
and don't forget install discord.js ! ``npm install discord.js``

## How i can use this library?

Before anything you need to put your client information like token and like this (:
mylib.login({"token": "your bot token", "game": "game tt", "type": "WATCHING", "ownerID": " OWNER ID "})

## Examples!
ping pong example
"
```js
var lifelib = require('life-lib')
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


## About me (:
Faisal Al-Mutery 
NodeJS Developer .. 
https://faisaldev.me
me@faisaldev.me
twitter.com/xfaisal49
