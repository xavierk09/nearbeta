const got = require('got');

module.exports = {
    name: 'dankmeme',
    aliases: ['dmeme'],
    category: "fun",
    description: "sends the ping of the bot",
    execute(client, command, message, args, Discord) {
        const dankembed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            dankembed.setTitle(`${memeTitle}`)
            dankembed.setURL(`${memeUrl}`)
            dankembed.setImage(memeImage)
            dankembed.setColor('#defafe')
            dankembed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(dankembed);
        })


    }
}