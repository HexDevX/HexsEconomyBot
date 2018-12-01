const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {

    let user = message.mentions.members.first() || message.author;

    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0; // `0` can be whatever.

    message.channel.send(user + ' has `' + money + '` money!')


}
