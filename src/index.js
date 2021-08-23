module.exports = function reverse (n) {
    let a = n;
    if( n < 0) {
        a=n*(-1);
    }
    return Number(String(a).split('').reduceRight((ak, el) => ak+el,''));

}
