// // Задача 5
// // Даны 3 целых числа. Вывести наибольшее из них.  


// // /*
// // promt() - для получения данных от пользователя 
// // parsenInt() -  переводит строковые данные в числовое
// // * - умножение 
// // ** - возведение в степень
// // alert() - чтобы вывести результат 

// /*
// Как будем решать:
// Получим первое число
// Получим второе число
// Получим третье число

// maxNumber = x
 
// если maxNumber < y тогда maxNumber = y
// если maxNumber < z тогда maxNumber = z

// x y z 
// 5 6 2
// 5 6
// 5 2 
// 6 2
// */

// var firstNumberString = prompt("Введите первое число");
// var secondNumberString = prompt("Введите второе число");
// var thirdNumberString = prompt("Введите третье число");

// var firstNumber = parseInt(firstNumberString);
// var secondNumber = parseInt(secondNumberString);
// var thirdNumber = parseInt(thirdNumberString);

// var maxNumber = firstNumber;

// // если maxNumber < y тогда maxNumber = y;
// // если maxNumber < z тогда maxNumber = z;

// if(maxNumber < secondNumber){
//     maxNumber = secondNumber;
// }
// if(maxNumber < thirdNumber){
//     maxNumber = thirdNumber;
// }

// alert("Максимальное число = " + maxNumber);


//Задача 6
//Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.
//Дано 3 целых числа. Вывести их в порядке возрастания. 
 /*
 Как будем решать:
 Проверим 1-е правило: что все числа больше нуля
 Проверим 2-е правило: что сумма двух маленьких сторон больше длины самой большей стороны
 Проверим 3-е правило: что КАЖДАЯ сторона треугольника меньше суммы двух других сторон
a = firstNumber, b = secondNumber, c = thirdNumber
a+b>c
a+c>b
b+c>a
 */

var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var triangleExist = false;

if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0){
    // здесь будем проверять следующее правило
   if(firstNumber + secondNumber > thirdNumber
       && firstNumber + thirdNumber > secondNumber
       && secondNumber + thirdNumber > firstNumber)
    {
        triangleExist = true;  
    }
}

if(triangleExist) {
    alert("Треугольник существет")
} else {
    alert("Треугольник НЕ существет")
}