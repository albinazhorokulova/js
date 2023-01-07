// Задача 1
// Пользователь вводит 2 числа, вывести квадрат каждого числа.


/*
promt() - для получения данных от пользователя 
parsenInt() -  переводит строковые данные в числовое
* - умножение 
** - возведение в степень
alert() - чтобы вывести результат 

Как будем решать:
Получить первое число
Получить второе число

Возвести в квадрат первое число
и вывести в квадрат первого числа
Возвести в квадрат второе число
и вывести в квадрат второго числа
*/

// получили числа от пользователя
var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");

// из строковых значений перевели в числовые
var firstNumber = parseInt (firstNumberString);
var secondNumber = parseInt (secondNumberString);

//возведение в квадрат, два варианта: умножить на себя и возвести в 2 степнь
var squareOffirstNumber = firstNumber * firstNumber;
var squareOfsecondNumber = secondNumber ** 2;

//выведение результата
alert("Квадрат первого числа = " + squareOffirstNumber);
alert("Квадрат второго числа = " + squareOfsecondNumber);
