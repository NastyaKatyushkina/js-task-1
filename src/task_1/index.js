/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) 
{
    
    if (number == Infinity) 
    return Infinity;
    if (isNaN(number)) 
    return 0;
    if (number < 0) number *= -1;

    let result = 0;
    let NumSt = number.toString();
    let i = 0;
    for (i; i < NumSt.length; i++)
    {

        let counting = parseInt(NumSt[i]);
        if (!isNaN(counting))
        result += parseInt(counting);
    }
    return result;
}

module.exports.numeralSum = numeralSum;
