module.exports = function reverse(n) {
    n = n.toString().split("");
    if (n[0] === "-") {
        n.shift();
    }
    n = n.reverse().join("");
    return Number(n);
};
