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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let x,i,sum = 0;
    let sum_arr = [];

    for (x of arr) {
        sum += x;
    }
    for (i in arr) {
        sum_arr[i] = sum - arr[i];
    }
    console.log(Math.min.apply(null, sum_arr) + " " + Math.max.apply(null, sum_arr));

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
