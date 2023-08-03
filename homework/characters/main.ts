import { Ogre, Knight, Archer } from './characters'

const ogre = new Ogre('Shrek', 150)
const knight = new Knight('Galahad', 100)
const archer = new Archer('Legolass', 70)

ogre.attack(knight)
knight.defend()
archer.collect(20)

const ogre2 = new Ogre('Ghengar', 300)
const knight2 = new Knight('Arthur', 200)
const archer2 = new Archer('Redhead from Brave', 40)

ogre2.attack(archer2)
knight2.defend()
archer2.attack(knight2)