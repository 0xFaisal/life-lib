# life-lib 

- Life Lib [ A framework of discord.js ] 


Examples [
ping pong example
"
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
})",
create broadcast command!
"mylib.addmessage({
        'message': '-bc',
        'reply': 'Please wait to send this message for all guild members (:',
        'options': {"type": "bc","offline": false, "guildOnly": true},
        'spam': 5000,
        'spamMessage': "Wait 5 sec"
})",


:]
