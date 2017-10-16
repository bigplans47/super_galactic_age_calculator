import { Calculator } from './../js/calculator.js';
var sample = new Calculator(10);

describe('Calculator', function () {

  it('should have an age in seconds', function () {
    expect(sample.ageSecondsRough).toEqual(315360000);
  });

  it('should be able to make a date with moment', function () {
    sample.makeBirthday('2/24/1989')
    console.log(sample.birthDate)
    expect(sample.birthDate).toEqual('02/24/1989');
  });
// makeDate(day, month, year)


});

// describe('Band', function () {
//   it('should have a name', function () {
//     expect(bandito.name).toEqual("Bandito");
//   });

  // it('characters to equal empty array', function() {
  //   expect(bandito.characters).toEqual([]);
  // });
  //
  // it('should add a character to a band', function() {
  //   bandito.addCharacters("Lilly");
  //   expect(bandito.characters).toEqual(['Lilly']);
  // });
  //
  // it('should return a number when band rolls', function() {
  //   expect(bandito.roll()).toEqual(jasmine.any(Number));
  // });
  //
  // it('should alert and set fans to zero when a 1 is rolled', function() {
  //   bandito.level = 1;
  //   bandito.roll();
  //   expect(bandito.fans).toEqual(0);
  // });
  //
  // it('should add a groupie for every 10 fans', function() {
  //   bandito.fans = 20;
  //   bandito.groupie();
  //   console.log(bandito.characters);
  //   expect(bandito.characters).toEqual(['Lilly',"groupie"]);
  // });
