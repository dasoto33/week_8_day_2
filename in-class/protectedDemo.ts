class Tv{
  constructor( protected serialNumber : string){
    this.serialNumber = serialNumber
  }
}

class Roku extends Tv{
  diplaySerialNumber():void{
    console.log(this.serialNumber)
  }
}

const roku = new Roku('3948347fv0')

roku.diplaySerialNumber()