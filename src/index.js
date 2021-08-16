module.exports = function toReadable (number) {
    let outString = '';
    const numberObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    number = number.toString();
    if (number.length == 1) {
        outString += numberObj[number];
    }
    if (number.length == 2) {
        if (number[0] == 1) {
            outString += numberObj[number[0] + number[1]];
        }
        if (number[0] > 1 && number[1] == 0) {
            outString += numberObj[number[0]*10];
        }
        if (number[0] > 1 && number[1] != 0) {
            outString += numberObj[number[0]*10] + ' ' + numberObj[number[1]];
        }
    }
    if (number.length == 3) {
        if (number[1] == 0 && number[2] == 0) {
            outString += numberObj[number[0]] + ' hundred';
        }
        if (number[1] == 0 && number[2] != 0) {
            outString += numberObj[number[0]] + ' hundred ' + numberObj[number[2]];
        }
        if (number[1] == 1) {
            outString += numberObj[number[0]] + ' hundred ' + numberObj[number[1] + number[2]];
        }
        if (number[1] > 1 && number[2] == 0) {
            outString += numberObj[number[0]] + ' hundred ' + numberObj[number[1]*10];
        }
        if (number[1] > 1 && number[2] != 0) {
            outString += numberObj[number[0]] + ' hundred ' + numberObj[number[1]*10] + ' ' + numberObj[number[2]];
        }
    }
    return outString;  
  }
