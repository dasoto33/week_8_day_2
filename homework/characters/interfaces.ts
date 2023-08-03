// use export to make interfaces accessible to the other modules

// the character being attacked needs to be passed in to the attack method
// return void since the methods perorm actions but don't return a value
export interface Attacks {
    attack(target: Character): void
}

// defend interface does not take an argument, since all it does is defend/block/shield the attack method
export interface Defends {
    defend(): void
}

// the gold collection interface takes in a number for how much gold is being collected
export interface Collects {
    collect(gold: number): void
}

// main character interface is used to take in a name and health amount for character that the player has selected
// any class implementing character must provide properties name and health
// this interface should be implemented in the abstract character (main) so it can be used by all character classes
export interface Character extends Attacks, Defends, Collects {
    name: string
    health: number
}