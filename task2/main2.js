function logDataTypes() {
    console.log(typeof 42); // "number" - число, тк это конечное целочисленное или дробное значение
    console.log(typeof 9007199254740991n); // "bigint" - большие числа,используется для представления целых чисел, превышающих максимальное безопасное значение типа number
    console.log(typeof "Hello"); // "string" - строка, последовательность символов, заключенная в кавычки
    console.log(typeof true); // "boolean" - логический тип данных, который может быть только true или false
    console.log(typeof null); // "object" - в Js это ошибка, так как null не является объектом, но typeof возвращает "object"
    console.log(typeof undefined); // "undefined" - значение переменной, которая была объявлена, но ей не присвоено значение
    console.log(typeof Symbol("sym")); // "symbol" - уникальный и неизменяемый идентификатор, используется для создания уникальных ключей
    console.log(typeof {}); // "object" - объект, представляет собой коллекцию свойств, ассоциированных с ключами
}
logDataTypes();