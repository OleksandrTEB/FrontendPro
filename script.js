function Student(name, surname, year, marks) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.marks = marks;
    this.attendance = [];
}

Student.prototype.showAge = function() {
    return (new Date().getFullYear() - this.year);
}

Student.prototype.present = function() {
    if (this.attendance.length < 25) {
        this.attendance.push(true);
    }
}

Student.prototype.absent = function() {
    if (this.attendance.length < 25) {
        this.attendance.push(false);
    }
}

Student.prototype.summary = function() {
    let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }

    let averageAttendance = 0;

    for (let j = 0; j < this.attendance.length; j++) {
        if(this.attendance[j] === true) {
            averageAttendance += 1;
        }
    }

    if((Math.trunc(sum / this.marks.length) > 90) && ((averageAttendance / this.attendance.length) > 0.9)) {
        return "Молодець!";
    } else if((Math.trunc(sum / this.marks.length) > 90) || ((averageAttendance / this.attendance.length) > 0.9)) {
        return "Добре, але можна краще!";
    } else {
        return "Редиска!";
    }
}


const student1 = new Student('John', 'Smith', 1999, [100,80,100]);
const student2 = new Student('Alex', 'Brown', 2004, [90,100,100]);
const student3 = new Student('Winston', 'Wilson', 1987, [100,40,99]);

for (let i = 0; i < 25; i++) {
    if(i < 2) {
        student1.absent();
    } else {
        student1.present();
    }
}

for (let i = 0; i < 25; i++) {
    if(i < 4) {
        student2.absent();
    } else {
        student2.present();
    }
}

for (let i = 0; i < 25; i++) {
    if(i < 12) {
        student3.absent();
    } else {
        student3.present();
    }
}

console.log(`Student 1: ${student1.summary()}`);
console.log(`Student 2: ${student2.summary()}`);
console.log(`Student 3: ${student3.summary()}`);