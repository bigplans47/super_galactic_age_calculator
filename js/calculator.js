var moment = require('moment');
// moment().format();

export class Calculator {
  constructor(age) {
    this.age = age;
    this.ageSecondsRough = age*365*24*60*60;
    this.birthDate = null;
    this.timePassed = null;
    this.dateNow = null;
  }

  makeBirthday(date) {
    var start = moment(date).format("MM/DD/YYYY");
    console.log(start);
    this.birthDate = start;
    var timePassed = moment(date, "MM/DD/YYYY").fromNow();
    console.log(timePassed);
    this.timePassed = timePassed
  }



}
