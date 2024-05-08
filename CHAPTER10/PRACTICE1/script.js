//QS => you are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewDta() that allows user to view website data.

let DATA = "Secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email)
    }

    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("khushi", "abc@gmail.com");
let student2 = new User("happiness", "atoz@gmail.com");

let teacher = new User("Dean", "Dean@gmial.com");

let admin1 = new Admin("Admin", "admin@gmail.com");