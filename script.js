// Задание 1: Определение операторов и операндов
let x = 5 + 10 * 2;  // Операнды: 5, 10, 2; Операторы: +, *, =
let isValid = (x > 10) && (x < 30);  // Операнды: x, 10, 30; Операторы: >, <, &&, =
x++;  // Операнд: x; Оператор: ++
delete obj.prop;  // Операнд: obj.prop; Оператор: delete

// Задание 2: Арифметические операторы
let num1 = 8;
let num2 = 3;
console.log("Сложение:", num1 + num2);  // Сложение
console.log("Разность:", num1 - num2);  // Разность
console.log("Произведение:", num1 * num2);  // Произведение
console.log("Деление:", num1 / num2);  // Деление
console.log("Остаток от деления:", num1 % num2);  // Остаток от деления
console.log("Возведение в степень:", num1 ** num2);  // Возведение в степень

// Задание 3: Бинарные и унарные операторы
let a = 10;
let b = -a;  // Унарный оператор (-), инвертирует знак переменной a
a++;  // Унарный оператор (++) увеличивает значение a на 1
let c = a + b;  // Бинарные операторы: + (сложение), = (присваивание)

// Задание 4: Операторы проверки отношений
let x1 = 15;
let y1 = 20;
if (x1 > y1) {
    console.log("x больше y");
} else if (x1 < y1) {
    console.log("x меньше y");
} else {
    console.log("x равно y");
}

// Задание 5: Проверка на равенство и неравенство
console.log(5 == '5');  // true, сравниваются значения без учета типа
console.log(5 === '5');  // false, разные типы данных
console.log(null == undefined);  // true, оба значения считаются "пустыми"
console.log(null === undefined);  // false, разные типы данных

// Задание 6: Оператор in
let user = {
    name: 'John',
    age: 30
};
console.log('name' in user);  // true, свойство "name" существует
console.log('email' in user);  // false, свойства "email" нет в объекте

// Задание 7: Оператор присваивания и комбинирование с другими операторами
let a2 = 10;
a2 += 5;  // Эквивалентно a2 = a2 + 5
a2 *= 2;  // Эквивалентно a2 = a2 * 2
a2 -= 3;  // Эквивалентно a2 = a2 - 3
console.log("Значение a2:", a2);

// Задание 8: Логические операторы
let isAdmin = true;
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn;  // false, так как isLoggedIn = false
let hasPermission = isAdmin || isLoggedIn;  // true, так как isAdmin = true
let isGuest = !isLoggedIn;  // true, так как !false = true
console.log("canViewPage:", canViewPage);  // false
console.log("hasPermission:", hasPermission);  // true
console.log("isGuest:", isGuest);  // true

// Задание 9: Тернарный оператор
let isLoggedIn2 = true;  // Пробуем значение true
let message = isLoggedIn2 ? "Добро пожаловать" : "Вход запрещен";
console.log(message);  // Выводится "Добро пожаловать", так как isLoggedIn2 = true

// Задание 10: Оператор typeof и оператор delete
console.log(typeof 123);  // "number"
console.log(typeof 'Hello');  // "string"
console.log(typeof undefined);  // "undefined"

let car = {
    make: 'Toyota',
    model: 'Corolla'
};
delete car.model;  // Удаление свойства model
console.log(car);  // Проверяем объект, вывод: { make: 'Toyota' }

// Задание 11: Практика с несколькими операторами
let num3 = 10;
let num4 = 20;

// Арифметические операции
let sum = num3 + num4;
let diff = num3 - num4;
let mult = num3 * num4;
let div = num3 / num4;

console.log("Сумма:", sum);
console.log("Разность:", diff);
console.log("Произведение:", mult);
console.log("Деление:", div);

// Сравнение
let isNum1Greater = num3 > num4;
console.log("num3 больше num4?", isNum1Greater);  // false

// Логические операторы
let bothPositive = num3 > 0 && num4 > 0;
console.log("Оба числа положительные?", bothPositive);  // true

// Тернарный оператор для вывода результата
let comparisonMessage = isNum1Greater ? "num3 больше num4" : "num3 меньше или равно num4";
console.log(comparisonMessage);  // Вывод: "num3 меньше или равно num4"
