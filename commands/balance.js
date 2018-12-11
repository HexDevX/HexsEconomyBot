const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

    let user = message.mentions.members.first() || message.author;

    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0;


    message.channel.send(`${user} you have ${money}$ !`)

}