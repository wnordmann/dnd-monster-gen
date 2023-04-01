// statBlockUtil.js
function calculateModifier(attributeValue) {
    return Math.floor((attributeValue - 10) / 2);
}

function formatAttributeStat(attributeValue) {
    const regex = /\(\d\)/; // Sometimes the AI include the Modiyer and this needs to be skipped
    if (regex.test(attributeValue)) {
        return "";
    }
    if (attributeValue) {}
    const modifier = calculateModifier(attributeValue);
    return `${attributeValue} (${
        modifier >= 0 ? '+' : ''
    }${modifier})`;
}

function challangeRatingToXP(challangeRating) {
    const regex = /\(\d+ XP\)/; // Sometimes the AI include the XP and this needs to be skipped
    if (regex.test(challangeRating)) {
        return "";
    }
    switch (challangeRating) {
        case '0':
            return "(10 XP)"
        case '1/8':
            return "(25 XP)"
        case '1/4':
            return "(50 XP)"
        case '1/2':
            return "(100 XP)"
        case '1':
            return "(200 XP)"
        case '2':
            return "(450 XP)"
        case '3':
            return "(700 XP)"
        case '4':
            return "(1100 XP)"
        case '5':
            return "(1800 XP)"
        case '6':
            return "(2300 XP)"
        case '7':
            return "(2900 XP)"
        case '8':
            return "(3900 XP)"
        case '9':
            return "(5000 XP)"
        case '10':
            return "(5900 XP)"
        case '11':
            return "(7200 XP)"
        case '12':
            return "(8400 XP)"
        case '13':
            return "(10000 XP)"
        case '14':
            return "(11500 XP)"
        case '15':
            return "(13000 XP)"
        case '16':
            return "(15000 XP)"
        case '17':
            return "(18000 XP)"
        case '18':
            return "(20000 XP)"
        case '19':
            return "(22000 XP)"
        case '20':
            return "(25000 XP)"
        case '21':
            return "(33000 XP)"
        case '22':
            return "(41000 XP)"
        case '23':
            return "(50000 XP)"
        case '24':
            return "(62000 XP)"
        case '25':
            return "(75000 XP)"
        case '26':
            return "(90000 XP)"
        case '27':
            return "(105000 XP)"
        case '28':
            return "(120000 XP)"
        case '29':
            return "(135000 XP)"
        case '30':
            return "(155000 XP)"
        default:
            return ""
    }
}

export {
    calculateModifier,
    formatAttributeStat,
    challangeRatingToXP
};
