 // function warOfNumbers(arr) {
  //   var evenSum = 0
  //   var oddSum = 0 
    
  //   arr.map((n) => {
  //     if(n % 2 === 0){
  //       return evenSum = evenSum + n;
  //     } else {
  //       return oddSum = oddSum + n;
  //     }
  //   });

  //   if(evenSum > oddSum){
  //     return evenSum - oddSum
  //   } else {
  //     return oddSum - evenSum
  //   }
  // }

  // warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])

  // ============================================

  // function timeForMilkAndCookies(date) {
  //   var year = date.getFullYear()
  //   var chrimah = new Date(year, 11, 24)

  //   if(date.getTime() === chrimah.getTime()){
  //     console.log(true)
  //   }else {
  //     console.log(false)
  //   }
  // };

  // timeForMilkAndCookies(new Date(2013, 11, 24))
  // timeForMilkAndCookies(new Date(1990, 5, 24))
  // timeForMilkAndCookies(new Date())
  
  // ============================================

  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  
  //   compareAge(other) {
     
  //     if(other.age > this.age){

  //       return(other.name + ' is older than me.');
  //     }
  //     else if(other.age < this.age){
  //       return(other.name + ' is younger than me.');
  //     }
  //     else{

  //       return(other.name + ' is the same age as me.')
  //     }
  //   }
  // }


  // ----Aleternate option--------
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
      
    compareAge(other) {
      let options = ['older than','the same age as','younger than'];
      let text = options[Math.sign(this.age - other.age) + 1];
      console.log(`${other.name} is ${text} me.`);
    }
  }

let p1 = new Person("Samuel", 24)
let p2 = new Person("Joel", 36)
let p3 = new Person("Lily", 24)

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

// ==============Example Problem for Learning====================

// class Person{
//   constructor(name, year_born){
//     this.name = name;
//     this.year_born = year_born
//   }

//   get age(){
//     return this.calcAge();
//     // console.log(this.calcAge());
//   }
//   calcAge(){
//     return new Date().getFullYear - this.year_born;  
//     // console.log(new Date().getFullYear - this.year_born);

//   }
//   what(){
//     console.log(this.name + ' is a person')
//   }
//   static arms(){
//     return 2
//   }
// }
// var me = new Person("Paige", 1990);
// console.log(me.name + ' was born in ' + me.year_born +'!')
// me.what();
// console.log(Person.arms())
// me.calcAge();
// console.log(me.age) //currently NaN 