"use strict";

const findUniq = (arr) => {

    const target = arr.slice(0),
        buffer = {},
        len = arr.length;

    target.reduce((prev, curr) => {
    let hash = curr.trim().split('').sort().join('').split(' ').join('');
        if (buffer[hash] === undefined) {
            buffer[hash] = 0;
            return;
        } else {
            buffer[hash] += 1
        }
    },buffer);

    for (let i = 0; i < len; i++) {
        let hash = arr[i].trim().split('').sort().join('').split(' ').join('');

        if (buffer[hash] === 0) {
            return arr[i].toString();
        }
    }

    console.log("There aren't uniq values in array");
    return null;
}

console.log(findUniq(['abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]));