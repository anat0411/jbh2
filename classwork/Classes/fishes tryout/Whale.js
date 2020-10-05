function Whale(weight,speed,location,size){
    Fish.call(this,'Whale',weight,speed,location);
    this.size = size;

    this.jump = function(){
        console.log("Jumped!");
    }
}