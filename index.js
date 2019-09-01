'use strict';

function isInteger(num) {
    return typeof num === 'number' && num === num && num % 1 === 0;
}

/**
 * Parse a number argument and returns an integer of the specified radix.
 * @param {Number} num number to be parsed.
 * @param {String | Array} symbols symbols of base-n number system.
 * @return {String}
 */
function parseInt(num, symbols) {
    if (!isInteger(num)) {
        throw new TypeError('Param should be Integer');
    }

    const radix = symbols.length;

    if (!radix) {
        throw new TypeError('Code symbols should not be null');
    }

    // convert num to number
    num = +num;

    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = -num;
    }

    if (num < radix) {
        return symbols[num];
    }

    let result = '';
    let quotient;
    let remainder;

    while (num / radix >= 1) {
        quotient = Math.floor(num / radix);
        remainder = num - quotient * radix;
        const char = symbols[remainder];
        result = char + result;
        num = quotient;
    }

    if (quotient > 0) {
        result = symbols[quotient] + result;
    }

    return isNegative ? '-' + result : result;
}

/**
 * Convert a string of base-n number to decimal.
 * @param {String} str string to be converted.
 * @param {String | Array} symbols symbols of base-n number system.
 * @return {Number}
 */
function toInt(str, symbols) {
    if (!symbols.length) {
        throw new TypeError('Code symbols should not be null');
    }

    // convert str to string
    str = '' + str;

    let isNegative = false;
    if (/^-/.test(str)) {
        isNegative = true;
        str = str.slice(1);
    }

    const radix = symbols.length;
    let result = 0;

    for (let i = 0, len = str.length; i < len; i++) {
        const char = str[len - i - 1];
        const base = symbols.indexOf(char);

        if (base === -1) {
            throw new TypeError(`Invalid string ${str}`);
        }
        result += Math.pow(radix, i) * base;
    }

    return isNegative ? -result : result;
}

module.exports = { parseInt, toInt };
