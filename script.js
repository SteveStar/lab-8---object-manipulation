//OBJECTS
student = {
    name: "Steve",
    age: 23,
    enrolled: true,
    courses: ["Web Dev", " Javascript", " Algorithms", " Databases"],
    studentInfo: function() {
        console.log(`\nStudent name: ${this.name}\nStudent age: ${this.age}\nCurrent enrolled classes: ${this.courses}\nis enrolled?: ${this.enrolled}\n`);
    }
}

console.log(`My name is ${student.name} and I am ${student.age} years old`);

student.studentInfo();

//OBJECT -> JSON

let studentString = '{"name": "Steve", "age": 23, "enrolled": true, "courses": ["Web Dev", "Javascript", "Algorithms", "Databases"]}\n';

console.log(studentString);

//JSON -> OBJECT
let studentJSON = JSON.parse(studentString);

console.log(studentJSON);

//Using Destructuring Assignment

StudentDestruc(student);

function StudentDestruc({name, age, courses}) {
    const message = `\nMy name is ${name}, I'm ${age} years old and my course list is: ${courses}.\n`;
    console.log(message);
}

let scoreArr = [42,59,21,85,77];
let [first, second, third, fourth, fifth] = scoreArr;

console.log(second);
console.log(first);
console.log(fifth);