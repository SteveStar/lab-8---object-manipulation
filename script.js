student = {
    name: "Steve",
    age: 23,
    enrolled: true,
    courses: ["Web Dev", "Javascript", "Algorithms", "Databases"],
    studentInfo: function() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age}, I'm taking these classes: ${this.courses}. And am I enrolled?: ${this.enrolled}`);
    }
}

