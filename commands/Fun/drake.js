module.exports = {
    name: 'drake',
    permissions: [],
    description: "Drake Meme Generator But In Discord. Pretty cool right?",
    async execute(client, command, message, args, Discord) {
        const split = args.join(" ").split("/")
        const text1 = split[0];
        const text2 = split[1];
        if (!text1 || !text2) return message.reply("You need 2 sentences separated with `/` for this to work.")
        const Image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('defafe')
                .setImage(Image)
        );
    }
}