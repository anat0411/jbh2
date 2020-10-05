function Fish(type, location, speed, weight) {
  this.type = type;
  this.location = location;
  this.speed = speed;
  this.weight = weight;

  this.getLocation = function() {
    return "The Location Is: " + this.location;
  };
  this.Move = function() {};
  this.setSpeed = function() {};
}

function Location(x, y) {
  this.x = x;
  this, (y = y);
}

locationShark = new Location(10, 10);
locationFish = new Location(20, 20);
locationWheal = new Location(30, 30);

var shark = new Fish("Big fish", locationShark, 356, 300);
var fish = new fish("Small fish", "East", 10, 4);
var wheal = new Fish("Mid Size fish", "East", 100, 100);
