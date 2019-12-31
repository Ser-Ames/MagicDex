const fs = require("fs");
module.exports = {
    symbols(mana) {
        if (!mana) return "";
        mana = mana.replace(/{/g, " ").replace(/}/g, " ").split(" ");
        let symbols = JSON.parse(fs.readFileSync("./data/icons.json", "utf8"));
        mana = mana.filter(icon => {
            return icon !== ""
        })
        let output = []
        mana.forEach(icon => {
            output.push(symbols[icon])
        })
        return output.join(" ")
    }
}