module.exports = {
    name: 'kick',
    category: "moderation",
    description: 'kicks ppl',
    async execute(client, command, message, args, Discord) {
        const target = message.mentions.users.first();
        const perm3Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error!')
        .setDescription('> The target is not kickable!')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')  
        if(!target.kickable) return message.reply(perm3Embed);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(perm1Embed)
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(perm2Embed)

        const perm4Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error!')
        .setDescription('> The target is higher than you in the roles hierarchy!')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
    if (!message.member.roles.highest.position < target.roles.highest.position) return message.reply(perm4Embed)

        //_________________________________________EMBEDS___________________________________________________________
        const perm1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> You need the `KICK_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const perm2Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription('> I need the `KICK_MEMBERS` permission!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

      

        const kickEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Successfully kicked!')
            .setDescription(`> ${args[0]} has been kicked from the server!`)
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')

        const err1Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Error!')
            .setDescription("> You couldn't kick that member!")
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        //__________________________________________________________________________________________________________


        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(kickEmbed);
        } else {
            message.channel.send(err1Embed);
        }
    }
}