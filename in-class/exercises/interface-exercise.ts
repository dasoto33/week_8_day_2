// Create a Interface Of MusicMedia that states anything implementing it should be able to `play` and create Classes: CD, Tape, Record to implement your interface

// to implement play:

// CDs will print "Spins and read with Laser"

// Tapes will print "Magnetic Tape is read"

// Records will print "Needle reads grooves"

interface MusicMedia {
    play(): void
}

class CD implements MusicMedia {
    play(): void {
        console.log("Spins and read with Laser")
    }
}

class Tape implements MusicMedia {
    play(): void {
        console.log("Magnetic Tape is read");
    }
}

class Records implements MusicMedia {
    play(): void {
        console.log("Needle reads grooves");
    }
}

const cd = new CD()
console.log('CD')
cd.play()

const tape = new Tape()
console.log('Tape')
tape.play()

const record = new Records()
console.log('Record')
record.play()