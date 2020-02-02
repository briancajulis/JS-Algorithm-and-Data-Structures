class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullname() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calcAverge() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  // A utility function (not related to the student)
  static enrollStudents(...students) {
    // maybe send an email here
    return 'Enrolling Students!';
  }
}

let firstStudent = new Student('Colt', 'Steele', 9);
let secondStudent = new Student('Blue', 'Steele', 10);

console.log(firstStudent.fullname());
console.log(secondStudent.addScore(4));

console.log(Student.enrollStudents());
