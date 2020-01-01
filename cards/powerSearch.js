const fetch = require("node-fetch");

module.exports = {
    async search(params) {
        let search = await fetch(params)
        let data = await search.json()
        return this.parseData(data)
    },

    parseArgs(args) {
        let params = "http://api.magicthegathering.io/v1/cards?"
        if (args.name) params += "name=" + args.name + "&";
        if (args.layout) params += "layout=" + args.params + "&";
        if (args.cmc) params += "cmc=" + args.cmc + "&"
        if (args.colors) params += "colors=" + args.colors + "&";
        if (args.coloridentity) {
            let coloridentity = args.coloridentity.split(" ");
            coloridentity.forEach((color, index) => {
                switch (color) {
                    case "red": {
                        coloridentity[index] = color.replace(/red/gi, "R")
                        break;
                    }
                    case "green": {
                        coloridentity[index] = color.replace(/green/gi, "G")
                        break;
                    }
                    case "blue": {
                        coloridentity[index] = color.replace(/blue/gi, "U")
                        break;
                    }
                    case "black": {
                        coloridentity[index] = color.replace(/black/gi, "B")
                        break;
                    }
                    case "white": {
                        coloridentity[index] = color.replace(/white/gi, "W")
                        break
                    }
                    default: {
                        delete coloridentity[index]
                    }
                }
            })
            params += "colorIdentity=" + coloridentity + "&";
        }
        if (args.supertypes) params += "supertypes=" + args.supertypes + "&";
        if (args.types) params += "types=" + args.types + "&";
        if (args.subtypes) params += "subtypes=" + args.subtypes + "&";
        if (args.rarity) params += "rarity=" + args.rarity + "&";
        if (args.set) params += "set=" + args.set + "&";
        if (args.setname) params += "setName=" + args.setname + "&";
        if (args.text) params += "text=" + args.text + "&";
        if (args.flavor) params += "flavor=" + args.flavor + "&";
        if (args.artist) params += "artist=" + args.artist + "&";
        if (args.number) params += "number=" + args.number + "&";
        if (args.power) params += "power=" + args.power + "&";
        if (args.toughness) params += "toughness=" + args.toughness + "&";
        if (args.loyalty) params += "loyalty=" + args.loyalty + "&";
        if (args.gameformat) params += "gameFormat=" + args.gameformat + "&";
        if (args.id) params += "id=" + args.id + "&";
        if (args.multiverseid) params += "multiverseid=" + args.multiverseid + "&";
        return this.search(params)
    },

    parseData(data) {
        data = data.cards
        let results = []
        data.forEach(c => {
            if (results.includes(c.name)) return
            results.push(c.name)
        });

        let embed = {
            "title": `Results of Power Search`,
            "color": "3092790",
            "description": ""
        }
        if (results.length === 0) embed.description += "There are no cards that matched your parameters.";
        else embed.description += results.join("\n") + "\n\n"
        embed.description += "*For any of these results, use `dex.card (card name)` for information on a specific card.*"
        return embed
    }
}