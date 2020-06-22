function greeter(person: Student) {
    return "Hello, " + person;
}

let user = "Jane User";

greeter({firstName: '77', fullName: '', middleInitial: '', lastName: ''})
// 自定义类型
interface Person {
    firstName: string,
    lastName?: any
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
