
exports.suits = function () {
    return ["♠️", "♥️", "♦️", "♣️"];
}

exports.getCard = function (cVal, cSuit) {
    return {
        val: cVal,
        suit: cSuit,
    };
}

exports.toString = function (card) {
    return "[ " + card.val + ", " + card.suit + " ]"
}

exports.suitVal = function (suit) {
    for (var i = 0; i < module.exports.suits().length; i++) {
        if (suit === module.exports.suits()[i]) {
            return module.exports.suits().length - i;
        }
    }
}


exports.valVal = function (val) {
    if (val >= 2 && val <= 10) {
        return val;
    } else if (val === 'J') {
        return 11;
    } else if (val === 'Q') {
        return 12;
    } else if (val === 'K') {
        return 14;
    } else if (val === 'A') {
        return 15;
    }

    return null;
}

//if a > b:  1
//if a < b: -1
//if a = b:  0
exports.compareVal = function (valA, valB) {
    if (module.exports.valVal(valA) > module.exports.valVal(valB)) {
        return 1;
    } else if (module.exports.valVal(valA) < module.exports.valVal(valB)) {
        return -1;
    }
    return 0;
}

exports.compareSuit = function (suitA, suitB) {
    if (module.exports.suitVal(suitA) > module.exports.suitVal(suitB)) {
        return 1;
    } else if (module.exports.suitVal(suitA) < module.exports.
      suitVal(suitB)) {
        return -1;
    }
    return 0;
}

exports.compare = function (cardA, cardB) {
    var valComp = module.exports.compareVal(cardA.val, cardB.val);
    if (valComp === 0) {
        return module.exports.compareSuit(cardA.suit, cardB.suit);
    }
    return valComp;
}
