
let card = require("./card.js");

exports.getPlayer = function (pName, pChips) {
    return {
        name: pName,
        chips: pChips,
        card: null,
    
        setCard: function (card) {
            this.card = card;
        },

        getCard: function () {
            return card
        },

        getSelf: function () {
            return "Player:\t" + this.name
              + "\nChips:\t" + this.chips
        }
    }
}

exports.toString = function (player) {
    return player.getSelf() + "\nCard:\t" + card.toString(player.card)
}
