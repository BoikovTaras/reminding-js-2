const findLongestWord = function (string) {
    let arr = string.split(' ')
    let result = "";
    let leng = 0
    for (word of arr) {
        let a = word.length
        if (a > leng) {
            leng = a
            result = word
        }
    }
    return result;
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'