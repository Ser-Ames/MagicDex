const fetch = require("node-fetch");

module.exports = {
    search(params) {
        fetch(params)
    },

    parseArgs(args) {
        let params = "http://api.magicthegathering.io/v1/cards?"
        if (args.name) params += "name=" + args.name + "&";
        if (args.layout) params += "layout=" + args.params + "&";
        if (args.cmc) params += "cmc=" + args.cmc + "&"
        if (args.colors) params += "colors=" + args.colors + "&";
        if (args.coloridentity) {
            let coloridentity = args.coloridentity.replace(/red/gi, "R").replace(/green/gi, "G").replace(/blue/gi, "U").replace(/black/gi, "B").replace(/white/gi, "W")
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
        if (args.language) params += "language=" + args.language + "&";
        if (args.gameformat) params += "gameFormat=" + args.gameformat + "&";
        if (args.legality) params += "legality=" + args.legality + "&";
        if (args.orderby) params += "orderBy=" + args.orderby + "&";
        if (args.random) params += "random=" + args.random + "&";
        if (args.id) params += "id=" + args.id + "&";
        if (args.multiverseid) params += "multiverseid=" + args.multiverseid + "&";
        return params
    }
}