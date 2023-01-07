
// console.log("Это идет от отдельного файла")
// var message = "Мое сообщение"

// console.log(message);

// var number = 5;

// console.log(number + 6);

// var myTrust = true;

// console.log(myTrust);


//var myAge = 10;


// //if(myAge < 16) {
// //   console.log("Ты еще подросток")
// //}


// // Ctrl + k+ c = отметить все в комментарии
// // Ctrl + k+ u = отменить комментарий
// //  || = OR


// // if(myAge > 16 || myAge < 22) {
// //     console.log("Юность")
// // }


// if(myAge >= 16 && myAge <= 22) {
//     console.log("Юность")
// }


// // if(myAge > 22) {
// //     console.log("Молодость")
// // }




// 2 урок 
//if - если
//else- еще, кроме "если"
var myAge = 10;
var isStudent = true;
var gender = true;


if(myAge > 16 && myAge < 22) {
    console.log("Юность")
 } else {
    console.log("Молодость")
 }



 if(myAge >= 16 && myAge <= 22) {
    console.log("Юность")
} 
  else if (myAge > 22) 
{
    console.log("Молодость")
}
  else if (myAge < 16 )
{
    console.log("Подросток")
}

// ---------------Еще условный блок про то студент ли вы?

if(isStudent == true)
{
    console.log("Вы студент")
}  else {
    console.log("Вы не студент")
}


if(gender = false)
{
    console.log("Вы женщина")
}   else {
    console.log("Вы мужчина")
}