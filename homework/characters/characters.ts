// import the interfaces from faces.ts
import { Character, Attacks, Defends, Collects } from "./interfaces"

// create abstract class to provide main shared properties, every class has to implement the following properties 
// make name and health (implemented from character class) public to make sure they are accessible by all interfaces
abstract class AbstractCharacter implements Character {
    constructor(public name: string, public health: number) {}
    abstract attack(target: Character): void
    abstract defend(): void
    abstract collect(gold: number): void
}

// create Ogre class, implements properties from AbstractCharacter (extends)
// implement attack, defend, and collect so that player can choose which to use
class Ogre extends AbstractCharacter implements Attacks, Defends, Collects {
    attack(target: Character): void {
        console.log(`${this.name} attacked ${target.name} with a club!`)
    }
    defend(): void {
        console.log(`${this.name} blocked attack with a shield!`)
    }
    collect(gold: number): void {
        console.log(`${this.name} collected ${gold} gold!`)
    }
}

// create Peon class
// identical to Ogre class so just use Extends and Ogre 
class Peon extends Ogre {}

// create Knight class, implements properties from AbstractCharacter (extends)
// essentially the same as Ogre class, just change the weapon names
class Knight extends AbstractCharacter implements Attacks, Defends, Collects {
    attack(target: Character): void {
        console.log(`${this.name} attacked ${target.name} with a sword!`)
    }
    defend(): void {
        console.log(`${this.name} defended attack with armor!`)
    }
    collect(gold: number): void {
        console.log(`${this.name} collected ${gold} gold!`)
    }
}

// create Archer class, implements properties from AbstractCharacter (extends)
// essentially the same again, just different weapons
class Archer extends AbstractCharacter implements Attacks, Defends, Collects {
    attack(target: Character): void {
        console.log(`${this.name} attacked ${target.name} with a bow and arrow!`)
    }
    defend(): void {
        console.log(`${this.name} defended attack with tunic!`)
    }
    collect(gold: number): void {
        console.log(`${this.name} collected ${gold} gold!`)
    }
}

// use export to make the classes accessible 
export { Ogre, Peon, Knight, Archer }
