const eris = require("eris"),
    config = require("../config.json"),
    fetch = require("node-fetch");

module.exports = {
    run: async (msg, args) => {
        let name = args.join(" ");
        if (name.length < 3) return msg.channel.createMessage(msg.author.mention + ", please make sure that your card name is 3 or more characters long!")
        let response = await msg.channel.createMessage("Fetching cards, please wait...");
        let res = await fetch(`http://api.magicthegathering.io/v1/cards?name=${name}`)
        let cards = await res.json();
        cards = cards.cards
        let results = []
        cards.forEach(c => {
            if (results.includes(c.name)) return
            results.push(c.name)
        });
        if (results.length === 0) return response.edit(msg.author.mention + ", there are no cards that matched your card name.");
        let embed = {
            "title": `Results for ${name}`,
            "color": "3092790",
            "footer": {
                "text": `Requested by: ${msg.author.username}#${msg.author.discriminator}`
            },
            "description": results.join("\n")

        }
        response.edit({
            content: "Card found!",
            embed: embed
        })
    },
    name: "search",
    options: {
        aliases: [],
        description: "searches for all cards which includes the specified text in the name",
        fullDescription: "searches for all cards which includes the specified text in the name",
        usage: "(card name)",
        caseInsensitive: true,
        argsRequired: false,
        hidden: false,
        requirements: {
            userIDs: [],
            permissions: {}
        }
    }
}