const eris = require("eris"),
    fs = require("fs")

module.exports = {
    loadAll(client) {
        let commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
        let commandTotal = 0;
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.registerCommand(command.name, command.run, command.options)
            commandTotal++
        }
        console.log(`${commandTotal} command(s) loaded!`)
    }
}