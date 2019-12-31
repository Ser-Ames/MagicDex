const eris = require("eris"),
    config = require("../config.json"),
    fs = require("fs"),
    fetch = require("node-fetch"),
    validation = require("../cards/validation");

module.exports = {
    run: async (msg, args) => {
        let name = args.join(" ");
        let response = await msg.channel.createMessage("Fetching card, please wait...")
        if (name.length < 3) return response.edit(msg.author.mention + ", please make sure that your card name is 3 or more characters long!")
        let res = await fetch(`http://api.magicthegathering.io/v1/cards?name=${name}`),
            cards = await res.json();
        if (!cards.cards[0]) return response.edit(msg.author.mention + ", invalid card! Please make sure that your card spelling is correct!")
        cards = cards.cards
        let card = []
        cards.forEach(c => {
            if (c.name.toLowerCase() == name.toLowerCase()) card.push(c)
        })
        let embed = await validation.format.format(card[0]);
        if (embed === undefined) return response.edit(msg.author.mention + ", invalid card! Please make sure that your card spelling is correct!");
        else response.edit({
            content: "Card found!",
            embed: embed
        })
    },
    name: "format",
    options: {
        aliases: ["formats"],
        description: "shows you the legal formats for a specified card",
        fullDescription: "shows you the legal formats for a specified card",
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