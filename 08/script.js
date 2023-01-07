class User{
    firstname= "";
    lastname= "";
    birthdate= "" ; 
    gender= "";

    constructor(name, surename, coningBirthdate, coningGender){
        this.firstname = name;
        this.lastname = surename;
        this.birthdate = coningBirthdate;
        this.gender = coningGender;
    }
}




var user = {
    name: "Albina",
    lastname: "Zhorokulova",
    age: 24,
    gender: "female"
}

var user2 = {
    firstname: "Erka",
    lastname: "Ergesheva",
    birthdate: 24 , 
    gender: "female",
    profession: "dentist"
}


var user3 = {
    firstname: "Nur",
    lastname: "Ergesheva",
    birthdate: 24 , 
    gender: "female",
    profession: "dentist"
} 


var book = {
    name: "Танатонавты",
    avtor: "Бернард Вербер",
    part: "1", 
    date: 2010
}

console.log(user.lastname);
console.log(user.age);

user.lastname = "Ergesheva"
console.log(user2.lastname)
console.log(user.name)
console.log(book.name)

var someUser = new User;
var thirdUser = new User("Бермет", "А", "2000-01-01", "Female");
console.log(thirdUser);
