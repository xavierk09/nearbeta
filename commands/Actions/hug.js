const emotes = require("discord-emotes");

module.exports = {
    name: 'hug',
    async execute(client, command, message, args, Discord) {

        emotes.hug().then(gif => {
            const embed = new Discord.MessageEmbed()
            embed.setColor('#defafe')
            embed.setImage(gif)

            if (args[0]) {
                let user = message.mentions.members.first();
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} hugs ${args[0]}!`)
            } else {
                embed.setTitle(':)')
                embed.setDescription(`${message.author.username} wants a hug!`)
            }
            message.channel.send(embed);
        })

    }
}
