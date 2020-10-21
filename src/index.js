module.exports = function check(str, bracketsConfig) {

    let resultString = null;
    while (str) {
        for (let elem of bracketsConfig) {
            str = str.replace(elem.join(''), '')
        }
        if (str === resultString) return false
        resultString = str
    }
    return str.length === 0
}

