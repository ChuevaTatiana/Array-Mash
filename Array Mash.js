//https://www.codewars.com/kata/582642b1083e12521f0000da


function arrayMash (array1, array2) {
    let res = [];
    let   i, l = Math.min(array1.length, array2.length);
    for (i = 0; i < l; i++) {
        res.push(array1[i], array2[i]);
    }
    res.push(...array1.slice(l), ...array2.slice(l));
    return res
}
