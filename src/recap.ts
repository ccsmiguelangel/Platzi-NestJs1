const myName:string = 'Nicholas';
const myAge:number = 12;

const suma = (a:number, b:number) => {
  return a+b;
}

suma(12,12);

class Person {
  // public myAge;
  // public myName;
  constructor(private age: number, private name: string) {};

  getSummary() {
     return `I'm ${this.name} and I'm ${this.age}`;
  }
}