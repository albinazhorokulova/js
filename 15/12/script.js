// let arr = [] - массив
// let number = 5
// let string = "строковое значение"
// let someObj = {}
// Объекты это предметы

// let user = {
//     name: "Albina",
//     lastname: "Zhorokulova",
//     age: 24,
//     gender: "female"
// }

// let user2 = {
//     name: "Alina",
//     lastname: "Zhorokulova",
//     age: 22,
//     gender: "female"
// }

// class Users{
//     firstname;
//     lastname;
//     age;
//     gender;

//     constructor(someName, someLastname, someAge, someGender){
//         let firstname = "Ginger";
//         this.firstname = someName;
//         this.lastname = someLastname;
//         this.age = someAge;
//         this.gender = someGender;
//         console.log(firstname);
//         console.log(this.firstname);
//     }
// }

class Users{
    firstname;
    lastname;
    age;
    gender;

    constructor(firstname, Lastname, Age, Gender){
        this.firstname = firstname;
        this.lastname = Lastname;
        this.age = Age;
        this.gender = Gender;
    }
    sayHi(){
        alert("Привет от " + this.firstname);
    }
    fullName(){
        var fullName = this.firstname + " " + this.lastname;
        return fullName; 
    }
} 

let user3 = new Users("Hermione", "Granger", 26, "female");
console.log(user3.lastname);
user3.lastname = "Gean Granger";
console.log(user3.lastname);

user3.sayHi();


let user4 = new Users("Ronald", "Weasley", 26, "male")
user4.sayHi();

alert(user3.sayHi())


var string = "Longer sentence";
console.log(string);

string.toUpperCase();
console.log(string);

string = string.toUpperCase();
console.log(string);




