//OBJECTS
student = {
    name: "Steve",
    age: 23,
    enrolled: true,
    courses: ["Web Dev", "Javascript", "Algorithms", "Databases"],
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

function StudentDestruc({name, courses}) {
    const message = `\nMy name is ${name}, and my course list is: ${courses}.\n`;
    console.log(message);
}

let scoreArr = [42,59,21,85,77];
let [first, second, third, fourth, fifth] = scoreArr;

console.log(second);
console.log(first);
console.log(fifth);

//Spread Operator

let copiedStudentObj = { ...student, graduationYear: 2026 }; //adding the new key and value
console.log(copiedStudentObj);

newCourses = ["Game Programming", "Game Engines 2"]; //new courses array

combinedCourses = [ ...student.courses, ...newCourses ]; //merging
console.log(combinedCourses);

//Object methods

student.addCourse = function(course) {
    this.courses.push(course);
    console.log(`\nCourse "${course}" has been added.`);
};

student.totalCourses = function() {
    return this.courses.length;
};

student.studentInfo();
student.addCourse("Creative writing");
console.log(`Total number of courses: ${student.totalCourses()}, ${student.courses}`);

