// Create a class `Car` and then create 2 car subclasses `SmartCar`, `Truck`.
// All Cars should be able to `brake` `drive` and `honk`
// - When a SmartCar drives it makes `hummmm` sound and when it honks it makes a `MMmeep` sound
// - When a Truck drives it makes a `vrooom` sound and when it honks it makes `BWaaaaaahp`
// - When a Truck or a SmartCar brakes it makes `squeeel` sound

class Car {
    brake(): string {
        return 'squeel'
    }
    drive(): string {
        return 'engine noise'

    }
    honk(): string {
        return 'honk'
    }
}

class SmartCar extends Car {
    drive(): string {
        return 'hummmm'

    }
    honk(): string {
        return 'MMmeep'
    }
}

class Truck extends Car {
    drive(): string {
        return 'vroom'

    }
    honk(): string {
        return 'BWaaaahp'
    }
}

const smartCar = new SmartCar()
console.log('Smart Car')
console.log(smartCar.drive())
console.log(smartCar.brake())
console.log(smartCar.honk())

const truck = new Truck()
console.log('Truck')
console.log(truck.drive())
console.log(truck.brake())
console.log(truck.honk())




