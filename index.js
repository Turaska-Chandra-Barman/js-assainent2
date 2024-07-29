// 2

import {result} from './circel.js';







// 1

const parson = {
    name:'jeckshon shorf',
    age:20,
}

const {name,age} = parson;

console.log(name,age);









 //3

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  Area() {
    return this.width * this.height;
  }
}

const result1 = new Rectangle(10,20)
console.log(result1.Area()) // answer : 200








// 4 

// getter


class Person {
  constructor(fullName) {
    this.fullName = fullName
  }

  get NewName() {
   return this.fullName;
  }

}

const fullform = new Person('jeckshon shorf');
console.log(fullform.NewName) // output : jeckshon shorf


//setter

class Person2 {
  constructor(fullName) {
    this.fullName = fullName;
  }

  set ParsentName(f) {
    return this.fullName = f
  }
  
}

const parsentForm = new Person2('jeckshon shorf');
parsentForm.ParsentName = 'Turaska Chandra Barman'
console.log(parsentForm) // output : Turaska Chandra Barman




// 5


const Circel =class{
    constructor(r){
        this.r = r;
    }

    calculate(){
        return 2 * Math.PI * this.r 
    }
}

const getArea = new Circel('20')
console.log(getArea.calculate()) // output = 125.66370614359172





//6

const travaling = 'dreamCountry';

const obj ={
    [travaling] : 'switharland',
    when : 'after 2 years',
    time : ' I dont know'
}


console.log(obj['dreamCountry']); // this is a computed property and output = switharland





// 7

const Animal = class{
    constructor(name,color){
        this.name = name;
      
    }

    creat(){
        return 'this Animal name is ' + this.name 
    }
}


class Dog extends Animal{
  constructor(name,color){
    super(name);
    this.color = color
  }

  modify(){
    return this.creat() + ' ' +  'and color is' + ' ' +  this.color
  }
}

const getAnimal = new Dog ('Dog','Black and White');
console.log(getAnimal.modify())




// 8

class Shape {
  constructor(age){
    this.age = age
  }

   target(){
    if(new.target){
     throw console.log('this is very bad')
    }
   return this.age  = age
  }
}

const getShape = new Shape('22');
console.log(getShape.target()) // 20





// 9 

class MathUtil {
  constructor(result){
    this.result = result;
  }

  static get(r){
    return r.result * r.result
  }
}

const getMath = new MathUtil(2);
console.log(MathUtil.get(getMath)) // 4