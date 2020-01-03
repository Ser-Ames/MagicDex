const eris = require("eris"),
    config = require("../config.json"),
    fs = require("fs"),
    fetch = require("node-fetch"),
    argsFlags = require("../load/argsFlags"),
    powersearch = require("../cards/powerSearch");

module.exports = {
    run: async (msg, args) => {
        args = argsFlags(args);
        if (args.length == 0) return msg.channel.createMessage(msg.author.mention + ", please add some search terms to your search!")
        let response = await msg.channel.createMessage("Fetching cards with your parameters, please wait...");
        let embed = await powersearch.parseArgs(args);
        response.edit({
            content: "Cards found!",
            embed: embed
        })
    },
    name: "powersearch",
    options: {
        aliases: ["ps"],
        description: "use the full power of the MtG card api to search for cards with any parameter you want",
        fullDescription: "use the full power of the MtG card api to search for cards with any parameter you want.\n\n{options} are all the parameters that you want to add to your search.\n \",\" represents \"and\", \"|\" represents \"or\" \n\n**IMPORTANT: If your search term contains more than 1 word, please use quotes \"like this\"**\n\nHelpful Examples:\ndex.ps --cmc 3|4 --name thopter --type artifact|creature\ndex.ps --cmc 5,6 --color red,green --type creature|instant|sorcery```         --name : name of the card (needs to be a string of characters).\n       --layout : whether the card is split, double sided, or some other special format.\n          --cmc : converted mana cost of the card.\n       --colors : the colors in the cards casting cost.\n--coloridentity : the color identity of the card (this includes colors the card uses and produces from activated or triggered abilities).\n   --supertypes : the supertypes of the card (eg: legendary).\n        --types : the type of card (eg: creature).\n     --subtypes : the subtypes of the card (eg: human, aura, equipment).\n          --set : the set code(s) you want the cards to come from.\n      --setname : the names of the set(s) you want the cards to come from.\n         --text : the rules text of the card (the text that tells you what the card does).\n       --flavor : the flavor text of the card (the italicised text underneath the rules text).\n       --artist : the artist that made the art for the card.\n        --power : the power of the card.\n    --toughness : the toughness of the card.\n      --loyalty : the loyalty of the card (exclusive to planeswalkers).\n   --gameformat : what format(s) the card can be played in.\n           --id : the printed set id of the card.\n --multiverseid : the universal id of the card.```        ",
        usage: "{options}",
        caseInsensitive: true,
        argsRequired: false,
        hidden: false,
        requirements: {
            userIDs: [],
            permissions: {}
        }
    }
}