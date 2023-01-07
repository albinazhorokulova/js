/*
ЦИКЛЫ (loops)
array - массив, множество
count = счетчик
length - длина массива 
*/
// var productApple = "Apple";
// // var productOrange = "Orange";
// var productsArray = ["Mandarin", "Kiwi", "Banana"];

// // console.log(productApple);
// // console.log(productOrange);
// // console.log(productArray);

// //сколько ряз что-то повторять, со скольки начать и до скольки делать
// // var count это объяление шага, счетчика цикла и счетчик = 0
// // цикл будет работать пока count меньше 10
// // шаг роста count это +1 на предыдущее значение 
// console.log(productsArray)
// console.log("Lenght: ", productsArray.Lenght);

// for(var count = 0; count < productsArray.Lenght; count = count+1)
// {
//     console.log(count, productArray[count] );
// }


// console.log("Мы будем выводить данные из массива");
// console.log(productsArray[2])
// console.log(productsArray[0])


// var numsArray = [105 , 500, 633, 2589, 3651, 2153, 25896];
// console.log(numsArray[2] + numsArray[4])
// console.log(numsArray[0])
// console.log(numsArray[5])

// console.log(numsArray)
// console.log("Lenght: ", numsArray.Lenght);

// for(var count = 0; count < numsArray.Lenght; count = count+1)
// {
//     console.log(count, numsArray[count] );
// }

var numsArray = [105 , 500, 633, 2589, 3651, 2153, 25896];
var sumOfNums = numsArray[0] + numsArray[3] +numsArray[1]

//console.log(sumOfNums);

var finalSum 
for(var count=0; count < numsArray.length; count = count + 1)
{
   finalSum = finalSum + numsArray[count];
   console.log(finalSum)
}


var strokovoyeZnachenie = "Banana";
console.log(strokovoyeZnachenie[1]);

for(var count =0; count < strokovoyeZnachenie.length; count = count + 1){
    console.log(strokovoyeZnachenie[count]);
}