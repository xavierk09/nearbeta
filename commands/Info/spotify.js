const convert = require('parse-ms')   
module.exports = {
    name: 'spotify',
    aliases: ['track', 'tr', 'sp'],
    async execute(client, command, message, args, Discord) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];

        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setDescription('User is not listening to Spotify!')
                    .setColor('#defafe')
            )
        }

        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https://open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);

            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`

            const embed = new Discord.MessageEmbed()
                .setAuthor("Spotify Track Information", "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png")
                .setColor(0x1ED768)
                .setThumbnail(image)
                .addField('Name:', name, true)
                .addField('Album:', album, true)
                .addField('Artist:', artist, true)
                .addField('Duration:', time, true)
                .addField('Listen now on Spotify!', `[\`${artist} - ${name}\`](${url})`, false)
            return message.channel.send(embed)

        

        }
    }
}