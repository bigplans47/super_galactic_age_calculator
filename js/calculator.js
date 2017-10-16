var moment = require('moment');

export class Calculator {
  constructor(age) {
    this.age = age;
    this.ageSecondsRough = age*365*24*60*60;
    this.birthDate = null;
    this.timePassed = null;
    this.timePassedSeconds = null;
    this.dateNow = null;
  }

  makeBirthday(date) {


    var start = moment(date).format("MM/DD/YYYY");
    this.birthDate = start;
    // console.log(this.birthDate);
    // this.dateNow = moment().format("MM/DD/YYYY");
    // console.log(this.dateNow);
    // var timeDiff = Math.abs(this.dateNow.getTime() - this.birthDate.getTime());
    // console.log()
    // this.timePassedSeconds = (this.dateNow).diff(this.birthDate);
    // console.log(this.timePassedSeconds);

    console.log(this.ageSecondsRough);
  }



}
