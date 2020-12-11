'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    return (s || '').split(':').reduce((target, item, index) => {
        item = !index
            ?
            ((s || '').includes('PM')
                ? (+item < 12 ? `${+item + 12}` : item)
                : (+item < 12 ? item : '00')
            )
            :
            item.replace(/PM|AM/gi, '');

        target.push(item);

        return target;
    }, []).join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
