module.exports = function toReadable(number) {
    const numberDictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const tenthsDictionary = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number <= 19) {
        return numberDictionary[number];
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return tenthsDictionary[number];
        } else {
            const unit = number % 10;
            const tenth = number - unit;
            return tenthsDictionary[tenth] + " " + numberDictionary[unit];
        }
    }
    if (number >= 100) {
        const hundredth = Math.floor(number / 100);
        const unitHundr = (number - hundredth * 100) % 10;
        const tenthHundr = number - hundredth * 100;
        if (number % 100 === 0) {
            return numberDictionary[hundredth] + " " + "hundred";
        } else if (tenthHundr < 20) {
            return (
                numberDictionary[hundredth] +
                " " +
                "hundred" +
                " " +
                numberDictionary[tenthHundr]
            );
        } else if (tenthHundr % 10 === 0) {
            return (
                numberDictionary[hundredth] +
                " " +
                "hundred" +
                " " +
                tenthsDictionary[tenthHundr]
            );
        } else {
            return (
                numberDictionary[hundredth] +
                " " +
                "hundred" +
                " " +
                tenthsDictionary[tenthHundr - unitHundr] +
                " " +
                numberDictionary[unitHundr]
            );
        }
    }
};
