/**
 * Задание 1
 *
 * Напишите функцию, которая принимает на вход массив строк
 * и возвращает только те их них что короче 20 символов
 *
 * [
 *   'Я короткая строка',
 *   'Я вроде бы тоже короткая',
 *   'А я длинная строка'
 * ] => [
 *   'Я короткая строка',
 *   'А я длинная строка'
 * ]
 *
 * Используем: filter
 */

const shortStrFunc = (array) => array.filter(e => e.length < 20);

console.log(shortStrFunc([
    'Я короткая строка',
    'Я вроде бы тоже короткая',
    'А я длинная строка',
    'Я короткая строка',
    'А я длинная строка'
]));

/**
 * Задание 2
 *
 * Напишите функцию, которая принимает на вход следующие данные:
 *
 * [
 *   { name: 'shark', likes: 'ocean' },
 *   { name: 'turtle', likes: 'pond' },
 *   { name: 'otter', likes: 'fish biscuits' }
 * ]
 *
 * И возвращает массив строк:
 *
 * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
 *
 * Используем: map
 */

const func = (array) => array.map(e => `${e.name} likes ${e.likes}`);

console.log(func([
    {name: 'shark', likes: 'ocean'},
    {name: 'turtle', likes: 'pond'},
    {name: 'otter', likes: 'fish biscuits'}
]));
/**
 * Задание 3
 *
 * Напишите функцию, которая принимает на вход 2 объекта
 * и возвращает 1 со общими свойствами
 *
 * { name: 'Алиса' }, { age: 11 } => { name: 'Алиса', age: 11 }
 *
 * Используем: ...
 */

const union = (obj1, obj2) => ({...obj1, ...obj2});

console.log(union({name: 'Алиса'}, {age: 11}));

/**
 * Задание 4
 *
 * Напишите функцию, которая возвращает наименьшее значение массива
 * [1,2,3,4] => 1
 *
 * Используем: оператор ... и Math.min
 */

const mathMinFromArray = (array) => Math.min(...array);

console.log(mathMinFromArray([1, 2, 3, 4, 1, -20, -66, 10]));

/**
 * Задание 5
 *
 * Напишите функцию, которая возвращает нечетные значения массива.
 * [1,2,3,4] => [1,3]
 *
 * Используем: reduce
 */

const oddNumbers = (arr) => arr.reduce((prevValue, currValue) => currValue % 2 === 0 ? prevValue : prevValue.concat(currValue), []);
console.log(oddNumbers([2, 1, 2, 3, 4]));
/**
 * Задание 2
 *
 * Напишите функцию, которая принимает на вход данные из корзины в следующем виде:
 *
 * [
 *   { price: 10, count: 2},
 *   { price: 100, count: 1},
 *   { price: 2, count: 5},
 *   { price: 15, count: 6},
 * ]
 * где price это цена товара, а count количество.
 *
 * Функция должна вернуть итоговую сумму по данному заказу.
 *
 * Используем: reduce
 */
const returnSum = (arr) => arr.reduce((prevValue, currValue) => prevValue + currValue.price * currValue.count, 0);
console.log(returnSum([
    {price: 10, count: 2},
    {price: 100, count: 1},
    {price: 2, count: 5},
    {price: 15, count: 6},
    {price: 25, count: 2},
]))

/**
 * Задание 3
 *
 * Реализовать функцию, на входе которой массив чисел, на выходе массив уникальных значений
 * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
 *
 * Используем: reduce и indexOf
 */

const uniqueNumbers = (arr) => arr.reduce((prevValue, currValue) => prevValue.indexOf(currValue) >= 0 ? prevValue : prevValue.concat(currValue), []);
console.log(uniqueNumbers([1, 2, 2, 4, 5, 5]));


/**
 * Задание 4
 *
 * Реализовать функцию, на входе которой число с ошибкой, на выходе строка с сообщением
 * 500 => Ошибка сервера
 * 401 => Ошибка авторизации
 * 402 => Ошибка сервера
 * 403 => Доступ запрещен
 * 404 => Не найдено
 *
 * Используем: switch case
 */
const errorFunction = (code) => {
    switch (+code) {
        case 500:
            return `Ошибка сервера`;
        case 401:
            return `Ошибка авторизации`;
        case 402:
            return `Ошибка сервера`;
        case 403:
            return `Доступ запрещен`;
        case 404:
            return `Не найдено`;
    }
    return `Что то не так`
};

console.log(errorFunction(401));

/**
 * Задание 5
 *
 * Напишите функцию, которая возвращает 2 наименьших значение массива
 * [4,3,2,1] => [1,2]
 *
 * Используем: .sort()
 */

const twoMathMinFromArray = (array) => array.sort((c, p) => c - p).slice(0, 2);

console.log(twoMathMinFromArray([1, 2, 3, 4, 1, -20, -66, 10, -15, -1, 99, -67]));


/**
 * Задание 6
 *
 * Реализовать функцию, на входе которой объект следующего вида:
 * {
 *    firstName: 'Петр',
 *    secondName: 'Васильев',
 *    patronymic: 'Иванович'
 * }
 * на выходе строка с сообщением 'ФИО: Петр Иванович Васильев'
 */
const returnStrName = (obj) => `ФИО: ${obj.firstName} ${obj.secondName} ${obj.patronymic}`;
console.log(returnStrName({
    firstName: 'Петр',
    secondName: 'Васильев',
    patronymic: 'Иванович'
}));
/**
 * Задание 7
 *
 * Реализовать функцию, которая принимает на вход 2 аргумента: массив чисел и множитель,
 * а возвращает массив исходный массив, каждый элемент которого был умножен на множитель:
 *
 * [1,2,3,4], 5 => [5,10,15,20]
 *
 * Используем: map
 */
const multiplier = (array, number) => array.map(e => e * number);
console.log(multiplier([1, 2, 3, 4], 10));
/**
 * Задание 8
 *
 * Реализовать функцию, которая принимает на вход 2 аргумента: массив и франшизу,
 * а возвращает строку с именнами героев разделенных запятой:
 *
 * [
 *    {name: “Batman”, franchise: “DC”},
 *    {name: “Ironman”, franchise: “Marvel”},
 *    {name: “Thor”, franchise: “Marvel”},
 *    {name: “Superman”, franchise: “DC”}
 * ],
 * Marvel
 * => Ironman, Thor
 *
 * Используем: filter, map, join
 */
const franchise = (array, string) => {
    const result = array.filter(e => e.franchise.toLowerCase() === string.toLowerCase());
    return `${string}: ${result.map(e => e.name).join(", ")}`;
};
console.log(franchise([
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
], `marvel`));