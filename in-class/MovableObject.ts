export default class MovableObject {
    private wrappedX: number;
    private wrappedY: number;
  
    constructor(wrappedX: number = 0, wrappedY: number = 0) {
      this.wrappedX = wrappedX;
      this.wrappedY = wrappedY;
    }
  
    get y():number{
      return this.wrappedY
    }
    set y(newY: number){
      if(newY >= 0) this.wrappedY = newY
      else console.log("Invalid Y")
    }
    
    set x(newX: number){
      newX >= 0 ? this.wrappedX = newX : console.log("Invalid X")
    }
    get x():number{
      return this.wrappedX
    }
  
    moveUp(distance: number) {
      this.wrappedY += distance
    }
  
    moveDown(distance: number) {
      this.y -= distance
    }
  
    moveSideways(distance: number) {
      this.x += distance
    }
  }
  
  
  const mo = new MovableObject()
  
  console.log(mo.x)
  
  mo.y += 10
  
  console.table(mo)