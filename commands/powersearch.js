const eris = require("eris"),
    config = require("../config.json"),
    fs = require("fs"),
    fetch = require("node-fetch"),
    argsFlags = require("../load/argsFlags"),
    powersearch = require("../cards/powerSearch");

module.exports = {
    run: async (msg, args) => {
        args = argsFlags(args);
        console.log(args)
        let embed = await powersearch.parseArgs(args);
        console.log(embed)
    },
    name: "powersearch",
    options: {
        aliases: ["ps"],
        description: "",
        fullDescription: "",
        usage: "",
        caseInsensitive: true,
        argsRequired: false,
        hidden: false,
        requirements: {
            userIDs: [],
            permissions: {}
        }
    }
}