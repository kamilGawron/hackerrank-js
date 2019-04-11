'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    var positiveCounter = 0, negativeCounter = 0, zeroCounter = 0;
    var positiveFraction = 0.00, negativeFraction = 0.00, zeroFraction = 0.00;
    arr.forEach(function (elem) {
        if (elem > 0) {
            positiveCounter++;
        } else if (elem < 0) {
            negativeCounter++;
        } else if (elem == 0) {
            zeroCounter++;
        }
    });
    positiveFraction = (positiveCounter / arr.length).toFixed(6);
    negativeFraction = (negativeCounter / arr.length).toFixed(6);
    zeroFraction = (zeroCounter / arr.length).toFixed(6);

    process.stdout.write(positiveFraction + "\n" + negativeFraction + "\n" + zeroFraction);


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
