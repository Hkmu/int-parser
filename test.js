const parser = require('./index');

const binarySymbols = '01';
const hexSymbols = '0123456789ABCDEF';
const base62Symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function testParseInt(num, symbols) {
    expect(parser.parseInt(num, symbols)).toBe(num.toString(symbols.length).toUpperCase());
}

/**
 * JavaScript Number.prototype.toString only support radix from 2 to 36
 */
function testParseBase62(num, result) {
    expect(parser.parseInt(num, base62Symbols)).toBe(result);
}

function testParseIntEqualToInt(num, symbols) {
    const str = parser.parseInt(num, symbols);
    const res = parser.toInt(str, symbols);

    expect(num === res).toBe(true);
}

it('parse decimal to binary', () => {
    testParseInt(0, binarySymbols);
    testParseInt(1, binarySymbols);
    testParseInt(2, binarySymbols);
    testParseInt(100, binarySymbols);
    testParseInt(10011, binarySymbols);
    testParseInt(-10, binarySymbols);
})

it('parse decimal to hex', () => {
    testParseInt(0, hexSymbols);
    testParseInt(15, hexSymbols);
    testParseInt(16, hexSymbols);
    testParseInt(100, hexSymbols);
    testParseInt(9999, hexSymbols);
    testParseInt(-5678, hexSymbols);
})

it('parse decimal to base-62 number', () => {
    let num = 0;
    testParseBase62(0, '0');
    testParseBase62(61, 'Z');
    testParseBase62(62, '10');
    testParseBase62(6789, '1Lv');
    testParseBase62(99999, 'q0T');
    testParseBase62(-99999, '-q0T');
})


it('parseInt equal to toInt', () => {
    testParseIntEqualToInt(10, binarySymbols);
    testParseIntEqualToInt(9999, base62Symbols);
    testParseIntEqualToInt(63, hexSymbols);
})
