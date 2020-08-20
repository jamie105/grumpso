const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	var randomtextnumber = Math.floor(Math.random() * 100);
	if(randomtextnumber==0){
		message.channel.send('insert grumpy text');
	}
	if(randomtextnumber==1){
		message.channel.send('insert grumpy text');
	}
	if(randomtextnumber==2){
		message.channel.send('insert grumpy text');
	}
	if(randomtextnumber==3){
		message.channel.send('insert grumpy text');
	}
	if(randomtextnumber==4){
		message.channel.send('insert grumpy text');
	}
	
	var randomnumber;
	if(message.content.toLowerCase().includes('hello')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Why you say hello? Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Goodbye :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('Yeah yeah, *stupid people* :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('Ah god another one :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Why do you even bother to talk :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Shut it you little... :angry:')
	}
    }
    
    if(message.content.toLowerCase().includes('hi')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Why you say hi? Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Bye :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('Yeah yeah, *stupid people* :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('Ah god another one :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Why do you even bother to talk :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Shut it you little... :angry:')
	}
    }
    
    if(message.content.toLowerCase().includes('goodmorning')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Why you say goodmorning? Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Goodnight :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('Yeah yeah, *stupid people* :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('Ah god another one :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Why do you even bother to talk :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Shut it you little... :angry:')
	}
    }
    
    if(message.content.toLowerCase().includes('ello')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Why you say ello? Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Goodbye :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('Yeah yeah, *stupid people* :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('Ah god another one :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Why do you even bother to talk :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Shut it you little... :angry:')
	}
    }
    
    if(message.content.toLowerCase().includes('whats up')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('The sky:rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('Positivity is the death of humanity :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('*looks up* :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Why do you even bother to live? :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Noone gives a dam you... :angry:')
	}
    }
    
    if(message.content.toLowerCase().includes('im bored')===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Thats what life is :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('So? :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('We all are you inconsiderate... :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Then go do something :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Yeah so? Why would we care? :angry:')
	}
    }
	
	if(message.content.toLowerCase().includes("i'm bored")===true){
	randomnumber = Math.floor(Math.random() * 10);
	if(randomnumber==0){
		message.channel.send('Noone cares :unamused:')
	}else
	if(randomnumber==1){
		message.channel.send('Thats what life is :rolling_eyes:')
	}else
    if(randomnumber==2){
		message.channel.send('So? :expressionless:')
	}else
    if(randomnumber==3){
		message.channel.send('We all are you inconsiderate... :tired_face:')
	}else
    if(randomnumber==4){
		message.channel.send('Then go do something :confused:')
	}else
    if(randomnumber==5){
		message.channel.send('Yeah so? Why would we care? :angry:')
	}
    }
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'help') {
	if (!args.length) {
    return message.channel.send('The entire g/help (catagorie) and g/help command are still a wip, so why is this message here? Well this is to explain a few things; 1: this bot is in BETA and will deffinately go down at some point due to an error. 2: This bot is constantly being updated.    Now what features are currently avaliable? Well the Grumpy part of the bot is currently working. Although its not complete, the bot stands a 60% chance at repying some random grumpy thing to specific words, while having a 5% chance of replying smt grumpy to any word. The list of replys is also slowly increasing.');
	}
	else if (args[0] === 'foo1') {
		return message.channel.send('hat');
	}
	else if (args[0] === 'foo2') {
		return message.channel.send('hat1');
	}
	else if (args[0] === 'foo3') {
		return message.channel.send('hat2');
	}
	else if (args[0] === 'foo4') {
		return message.channel.send('hat3');
	}
	message.channel.send(`*${args[0]}* isn't a valid help option, type *${prefix}help* for a list of options`);
}



 
    
    


});
client.login(token);
