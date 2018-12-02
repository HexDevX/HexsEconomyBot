const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {


    if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('You\'re missing the permission `MANAGE_GUILD` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to add.`) // if args[0] (first input) is not a number, return.
    db.add(`money_${user.id}`, args[0])
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`Added Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("GREEN") // random = "RANDOM"
    .setTimestamp()
    // change args[0] to args[1] since it's much easier to do the command.

    message.channel.send(embed)
}