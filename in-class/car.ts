import MovableObject from './MovableObject';

class Car {
  private readonly vin: string;
  readonly make: string;
  readonly model: string;
  readonly year: number;
  position: MovableObject;
  nickname?: string;

  constructor(vin: string, make: string, model: string, year: number) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.position = new MovableObject();
  }

  drive(miles: number): void {
    this.position.moveSideways(miles);
    console.log(
      `You drove ${miles} miles and you are at mile ${this.position.x}`
    );
  }

  printInfo(): void {
    console.log(`The car vin: ${this.vin}
${this.make}
${this.year}
${this.model}
    `);
  }
}

const car = new Car('435873045dsf92', 'honda', 'fit', 2010);

car.nickname = 'betty white';
console.log(car.year);
car.drive(10);
car.drive(5);

console.table(car);
/* can only access private prop in class 
console.log(car.vin) */

car.printInfo();



class Car2 {
  position: MovableObject;
  nickname?: string;

  constructor(private readonly vin: string, 
    public readonly make: string, 
    public readonly model: string, 
    public readonly year: number) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.position = new MovableObject();
  }

  drive(miles: number): void {
    this.position.moveSideways(miles);
    console.log(
      `You drove ${miles} miles and you are at mile ${this.position.x}`
    );
  }

  printInfo(): void {
    console.log(`The car vin: ${this.vin}
${this.make}
${this.year}
${this.model}
    `);
  }
}
/* Error color prop unavailable
car.color = 'white' */