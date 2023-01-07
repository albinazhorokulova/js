/*
+, -, *, /, **, %
*/

/*
создадим массив чисел 
мы откроем цикл для перебора числа
 условия проверки (если это четное число)
   я буду их складывать
 условия проверки ( если это НЕчетное число)
   я буду их умножать друг на друга 
выведу результат
*/

/*var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var chetnyeChisla = 0;
var nechetnyeChisla =1;
for(var count=0; count< numsArray.length; count=count+1)
{ 
    //четные числа где в остатке на деление 2 ничего не остается
    if(numsArray[count] % 2 == 0) {
        chetnyeChisla = chetnyeChisla + numsArray[count]; 
}   
    else if(numsArray[count] % 2 == 1){
        nechetnyeChisla = nechetnyeChisla * numsArray[count];
}
}

console.log("Сумма четных чисел", chetnyeChisla );
console.log("Сумма умножений нечетных чисел", nechetnyeChisla);
*/

var myAge = 15;
var gender = true;
var isStudent = true;

if (isStudent == true) {
  if (myAge >=16 && myAge <=22){
    if(gender == true){
    console.log("Вы студентка колледжа");
    }
    else if(gender == false) {
      console.log("Вы студент колледжа")
    }
  }
  else if (myAge< 16){
    if (gender == true)
    {
      console.log("Вы школьница");
    }
    else if(gender == false) 
    {
      console.log("Вы школьниr");
    }
  }
}