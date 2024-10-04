const FAN_MULTIPLIER = 2;
const CELSIUS_ADJUST = 20;
const FAHRENHEIGHT_ADJUST = 25;

export const convertTime = (time) => {
    if (time <= 0) return null;
    return Math.floor(time * 0.8);
}

export const convertTemp = (temp, ovenType, units) => {
    if (temp <= 40) return null;
    if (!['fan', 'conventional'].includes(ovenType)) return null;
    if (!['c', 'f'].includes(units)) return null;

    let adjust = units == 'c' ? CELSIUS_ADJUST : FAHRENHEIGHT_ADJUST;
    let multiplier = ovenType == 'fan' ? FAN_MULTIPLIER : 1;
    return temp-(adjust * multiplier);
}