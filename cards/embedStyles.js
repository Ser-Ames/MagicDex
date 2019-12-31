const symbols = require("./symbols")
module.exports = {
    card: {
        planeswalker(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        creature(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.power && card.toughness) embed.description += card.power + "/" + card.toughness + "\n\n";
            if (card.flavor) embed.description += "*" + card.flavor + "*" + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        artifact(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        enchantment(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        land(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        instant(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        sorcery(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.manaCost) embed.title += " • " + symbols.symbols(card.manaCost);
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            embed.description += "Printed Sets: " + card.printings.join(", ");
            return embed
        },

        vanguard(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.hand && card.life) embed.description += "Hand: " + card.hand + "\nLife: " + card.life + "\n\n";
            embed.description += "Printed Sets: " + card.printings.join(", ")
            if (card.multiverseid && card.rarity) embed.footer.text += `MID: ${card.multiverseid} • Rarity: ${card.rarity}`;
            else if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            else if (card.rarity) embed.footer.text += "Rarity: " + card.rarity;
            return embed;
        },

        phenomenon(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            embed.description += "Printed Sets: " + card.printings.join(", ")
            if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            return embed;
        },

        scheme(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text + "\n\n";
            if (card.flavor) embed.description += "*" + card.flavor + "*" + "\n\n";
            embed.description += "Printed Sets: " + card.printings.join(", ");
            if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            return embed;
        },

        plane(card) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": "",
                "footer": {
                    "text": ""
                }
            }
            if (card.type) embed.description += "**" + card.type + "**" + "\n\n";
            if (card.text) embed.description += card.text.replace(/{CHAOS}/g, "CHAOS") + "\n\n";
            if (card.flavor) embed.description += "*" + card.flavor + "*" + "\n\n";
            embed.description += "Printed Sets: " + card.printings.join(", ");
            if (card.multiverseid) embed.footer.text += "MID: " + card.multiverseid;
            return embed;
        }
    },
    format: {
        format(card, formats) {
            let embed = {
                "title": card.name,
                "color": "3092790",
                "description": ""
            }
            if (formats.legal.length > 0) embed.description += "Legal formats: " + formats.legal.join(", ") + "\n"
            else embed.description += "Legal formats: " + "no legal formats" + "\n"
            if (formats.illegal.length > 0) embed.description += "Illegal formats: " + formats.illegal.join(", ") + "\n\n";
            else embed.description += "Illegal formats: " + "no illegal formats" + "\n\n";
            embed.description += "*" + "Do `dex.card " + card.name + "` for information about " + card.name + "*";
            return embed
        }
    }
}