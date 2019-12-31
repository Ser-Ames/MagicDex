const eris = require("eris")

module.exports = {

    guildCreate(guild, client) {
        this.updatePresence(client)
    },

    guildDelete(guild, client) {
        this.updatePresence(client)
    },

    ready(client) {
        let d = new Date(Date.now())
        console.log(`[${d.toTimeString().slice(0, 8)}] ${client.user.username} is online!`);
        client.editStatus(`online`, {
            name: `in ${client.guilds.size} servers!`,
            type: 0
        })
    },

    updatePresence(client) {
        client.editStatus(`online`, {
            name: `${client.guilds.size} Servers!`,
            type: 0
        })
    }
}