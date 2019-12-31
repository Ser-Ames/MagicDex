const eris = require("eris"),
    config = require("../config.json");

module.exports = {
    run: async (msg, args) => {
        const clean = text => {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            msg.channel.createMessage(`\`\`\`xl\n${clean(evaled)}\`\`\``);
        } catch (err) {
            msg.channel.createMessage(`\`ERROR\` \`\`\`\n${clean(err)}\n\`\`\``);
        }
    },
    name: "eval",
    options: {
        aliases: [],
        description: "evaluate a string of code",
        fullDescription: "evaluates a string of code that you provide",
        usage: config.prefix + "eval (code to evaluate)",
        caseInsensitive: false,
        argsRequired: false,
        hidden: true,
        requirements: {
            userIDs: config.ownerIDs,
            permissions: {}
        }
    }
}