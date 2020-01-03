const eris = require("eris")

module.exports = {

    guildCreate(guild, client) {
        this.updateStatus(client)
    },

    guildDelete(guild, client) {
        this.updateStatus(client)
    },

    ready(client) {
        let d = new Date(Date.now())
        console.log(`[${d.toTimeString().slice(0, 8)}] ${client.user.username} is online!`);
        this.updateStatus(client)
    },

    updateStatus(client) {
        client.editStatus(`online`, {
            name: `in ${client.guilds.size} servers!`,
            type: 0
        })
    }
}