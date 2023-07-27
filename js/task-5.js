const checkForSpam = function (message) {
    let text = message.toLowerCase().split(' ')
    let result = false
    for (const word of text) {
        if (word.match('spam') || word.match('sale')) {
            result = true
            break
        }        
    }
    return result
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true