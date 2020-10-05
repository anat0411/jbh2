function Shark(weight,speed,location,teeth){
    Fish.call(this,'Shark',weight,speed,location);
    this.teeth = teeth;

    this.attack = function(){
        console.log("attack!");
    }
}