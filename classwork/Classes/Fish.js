function Fish(type,location,speed,weight){
    this.type = type;
    this.speed = speed;
    this.location = location;
    this.weight = weight;

    this.getLocation = function(){
        return this.location;
    }
    this.move = function(x,y){
        if( this.speed > 0){
            this.location.x += x;
            this.location.y += y;
        }
    }
    this.setSpeed = function(kph){
        this.speed = kph;
    }
    this.stop = function(){
        this.speed = 0;
    }
}


/********** My Program **********/

var shark = new Fish('Shark',{x:45,y:25},0,120);
var _fish = new Fish('fish',{x:20,y:50},26,33);
var whale = new Fish('Whale',{x:19,y:80},68,1000);

console.log( whale.type + " - ",whale.getLocation() );
whale.move(26,13);
console.log( whale.type + " - ",whale.getLocation() );

console.log( _fish.type + " - ",_fish.getLocation() );
_fish.move(26,13);
console.log( _fish.type + " - ",_fish.getLocation() );