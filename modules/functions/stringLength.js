function stringLength(string) {
    const length = string.length;
    if (length === 0) {
        throw new Error("String shouldn't be empty");
    } 
    return length;
}

module.exports = stringLength
