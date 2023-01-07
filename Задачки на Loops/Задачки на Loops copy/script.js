/* 4.2 Дано целое положительное число N. 
Найти сумму квадратов всех натуральных чисел от 0 до N.

// // /*
// // prompt() - для получения данных от пользователя 
// // parseInt() -  переводит строковые данные в числовое
// // * - умножение 
// // ** - возведение в степень
// // alert() - чтобы вывести результат 
// // count = count + 1
// // count ++
*/ 

let NumberString = prompt("Введите перовое число");
let N = parseInt(NumberString);

let squareSumm = 0;

for(let count = 0; count < N; count ++) {
    if(count > 0){
        let square = count * count;
        squareSumm = squareSumm + square;
    }
}

alert("Сумма квадратов до N =" + N + " равна" + squareSumm);
