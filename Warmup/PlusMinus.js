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
    const arrLength = arr.length;
    let positive = 0, negative = 0, nutral = 0;
    for (let i = 0; i < arrLength; i++) {
        arr[i] > 0 ? positive += 1 : arr[i] < 0 ? negative += 1 : nutral += 1;
    }
    console.log(`${(positive/arrLength).toFixed(6)}\n${(negative/arrLength).toFixed(6)}\n${(nutral/arrLength).toFixed(6)}`);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
