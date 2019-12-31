const eris = require("eris"),
    config = require("./config.json"),
    fs = require("fs"),
    loader = require("./load/commandLoader"),
    events = require("./load/eventhandler"),
    client = new eris.CommandClient(config.token, {
        messageLimit: 1,
        guildSubscriptions: false
    }, {
        defaultHelpCommand: true,
        ignoreBots: true,
        ignoreSelf: true,
        owner: "Ser Ames",
        prefix: config.prefix,
        description: "MagicDex is a bot designed to help with searching and finding cards",
        defaultCommandOptions: {
            caseInsensitive: true
        }
    })

loader.loadAll(client)

client.connect();

client.on("ready", () => {
    events.ready(client)
})

client.on("disconnect", () => {
    console.log("All shards disconnected")
    client.connect();
})

client.on("guildCreate", (guild) => {
    console.log(`Joined ${guild.name}`);
    events.guildCreate(guild, client)
})

client.on("guildDelete", (guild) => {
    console.log(`Left ${guild.name}`);
    events.guildDelete(guild, client)
})

client.on("shardDisconnect", (err, id) => {
    console.log(`Shard ${id} disconnected\n${err}`)
})

client.on("shardReady", (id) => {
    console.log(`Shard ${id} is ready!`)
})