if (!Array.from) {
    Array.from = function (arrayLike) {
        const result = [];
        for (let i = 0; i < arrayLike.length; i++) {
            result.push(arrayLike[i]);
        }
        return result;
    }
}