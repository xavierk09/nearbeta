module.exports = {
    name: 'resume',
    aliases: ['unpause'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        ).then(function(message){
            message.react('▶');
        })
        client.distube.resume(message);
    }
}