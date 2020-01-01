const embedStyles = require("./embedStyles");

module.exports = {
    card: {
        type(card) {
            if (card === undefined) return undefined
            let type = card.type.toLowerCase().split(" ")
            if (["basic", "elite", "host", "legendary", "ongoing", "snow", "world"].includes(type[0])) {
                type.shift()
            }
            if (type.includes("creature")) {
                return embedStyles.card.creature(card);
            }
            switch (type[0]) {
                case "planeswalker": {
                    return embedStyles.card.planeswalker(card);
                }
                case "artifact": {
                    return embedStyles.card.artifact(card);
                }
                case "enchantment": {
                    return embedStyles.card.enchantment(card);
                }
                case "land": {
                    return embedStyles.card.land(card);
                }
                case "instant": {
                    return embedStyles.card.instant(card);
                }
                case "sorcery": {
                    return embedStyles.card.sorcery(card);
                }
                case "vanguard": {
                    return embedStyles.card.vanguard(card);
                }
                case "phenomenon": {
                    return embedStyles.card.phenomenon(card);
                }
                case "scheme": {
                    return embedStyles.card.scheme(card);
                }
                case "plane": {
                    return embedStyles.card.plane(card)
                }
                default: {
                    return undefined
                }
            }
        }
    },

    format: {
        format(card) {
            if (card === undefined) return undefined;
            let formats = {
                "legal": [],
                "illegal": []
            };
            card.legalities.forEach(mode => {
                if (mode.legality === "Legal") formats.legal.push(mode.format);
                else formats.illegal.push(mode.format);
            })
            return embedStyles.format.format(card, formats);
        }
    },

    rulings: {
        rulings(card) {
            if (card === undefined) return undefined;
            let rulings = [];
            if (card.rulings.length > 0) {
                card.rulings.forEach(rule => {
                    rulings.push("Date Added: " + rule.date + "\n" + "Rule: " + rule.text)
                })
            }
            return embedStyles.rules.rulings(card, rulings);
        }
    }
}