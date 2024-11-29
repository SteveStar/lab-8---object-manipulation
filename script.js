student = {
    name: "Steve",
    age: 23,
    enrolled: true,
    courses: ["Web Dev", " Javascript", " Algorithms", " Databases"],
    studentInfo: function() {
        console.log(`\nStudent name: ${this.name}\nStudent age: ${this.age}\nCurrent enrolled classes: ${this.courses}\nis enrolled?: ${this.enrolled}`);
    }
}

console.log(`My name is ${student.name} and I am ${student.age} years old`);

student.studentInfo();