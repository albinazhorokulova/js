// console.log("Это идет от отдельного файла")
// var message = "Мое сообщение"



alert ("Ваш возраст" + myAgeString); // выводит значение myAgeString в окне
// console.log(myAgeString); // выводит значение myAgeString в консоли 

/*
int, integer = это числовое значение 
str, srtring = это строковое значение 
bool = логическое значение (правда или ложь)
*/

function ageCategorization(ageInFunctionString){
    var ageInFunction = parseInt(ageInFunctionString);
    if(ageInFunction >= 16 && ageInFunction <= 22) {
        alert("Юность")
    } 
    else if (ageInFunction > 22) 
    {
        alert("Молодость")
    }
    else if (ageInFunction < 16 )
    {
        alert("Подросток")
    }
    
}

var howManyTimesString = prompt("Сколько раз буем определять возраст?")
var howManyTimes = parseInt(howManyTimesString)
var finalMessage = "";
for(var counter=0; counter < howManyTimes; counter++){
    var myAgeString = prompt("ВВедите ваш возраст" + (counter + 1) + " раз");
    ageCategorization(myAgeString)
    finalMessage = finalMessage + "Шаг " + (counter + 1) + " раз: Возраст " + myAgeString + ". ";
}

/*
var myAgeString = prompt("ВВедите ваш возраст")
ageCategorization(myAgeString)

var myAgeString2 = prompt("ВВедите ваш возраст второй раз")
ageCategorization(myAgeString2)

var thirdTime = prompt("ВВедите ваш возраст третий раз")
ageCategorization(thirdTime)
*/

//  if(myAge2 >= 16 && myAge2 <= 22) {
//     alert("Юность")
// } 
//   else if (myAge2 > 22) 
// {
//     alert("Молодость")
// }
//   else if (myAge2 < 16 )
// {
//     alert("Подросток")
// }


alert(finalMessage)