module.exports.login = undefined;
var spam = [];
var spam_count = {};
var discord = require('discord.js')
var client = new discord.Client();

module.exports.login = function( options )  {
    client.login(options.token)
this.ownerID = options.ownerID;
    client.on( 'ready', ( ) => { 
        module.exports.ready = true;
        if(options.game) {
            if(options.type) {
            client.user.setActivity(`${options.game}`, {type: options.type});
            } else {
                client.user.setActivity(`${options.game}`, {type: "PLAYING"});
            }
            }
    });
}
module.exports.onReady = function(options) {
}


var errors = {};
module.exports.addmessage = function async(options) {
    if( this.ready == false ) return Error('Your bot is not ready yet!'); 
client.on('message', async message => {
    if(message.content.startsWith(options.message)) {
        if(message.author.id == client.user.id) return;
        if(options.options.guildonly) {
            if(!message.guild) return;
        } 
        if(options.options.addRole) {
            if(!message.guild) return;
            if(!message.guild.me.hasPermission('MANAGE_ROLES')) return console.log("i don't have permission ``MANAGE_ROLES``!")
            var role = message.guild.roles.find(r => r.name == options.options.addRole);
            if(!role) return console.log("i can't find this role, sorry!");
            message.member.addRole(role.id)
        }
        if(options.options.owneronly) {
            if(message.author.id !== this.ownerID) return;
        }
        if(options.options.type == "bc") {
            errors[message.guild.id] = 0;
            var bc_message = message.content.replace(options.message, '');
            if(!bc_message) return;

            if(options.offline == true) {
if(options.spam) {            
    if(spam.includes(message.guild.id)) return message.reply(options.spamMessage);
    
                message.guild.members.forEach(users => {
                    var bc_message = message.content.replace(options.message, '').replace('[user]', users);
                    users.send(bc_message).catch( err => { errors[message.guild.id]++; } )
                });

                spam.push(message.guild.id);
                setTimeout (function (){
                    var index = spam.indexOf(message.guild.id);
                    spam.splice(index, 1);
                    spam_count[message.guild.id] = 0;
                 }, options.spam)
            }
        } else {
            message.guild.members.forEach(users => {
                var bc_message = message.content.replace(options.message, '').replace('[user]', users);
                users.send(bc_message).catch(err => errors[message.guild.id]++)
            }); 
        }
        } else {
        if(options.spam) {
            console.log(spam)
            console.log(spam_count)
            if(options.spamMessage) {
         if(spam.includes(message.author.id)) return message.reply(options.spamMessage);
            } else {
                if(spam.includes(message.author.id)) return message.reply('wait ' + options.spam / 1000 + ' sec');
            }
     if(message.guild) {
        await  message.channel.send(options.reply.replace('[user]', message.author).replace('[server]', message.guild.name))
     } else {
        await  message.channel.send(options.reply.replace('[user]', message.author))

     }
        if(!spam_count[message.author.id]) {
             spam_count[message.author.id] = 0;
        }
             if(spam_count[message.author.id] == 5) {
            spam.push(message.author.id);
            setTimeout (function (){
                var index = spam.indexOf(message.author.id);
                spam.splice(index, 1);
                spam_count[message.author.id] = 0;
             }, options.spam)
        }
        spam_count[message.author.id]++;
    } else {
      await  message.channel.send(options.reply.replace('[user]', message.author).replace('[server]', message.guild.name))
    }
}
}
})

}
