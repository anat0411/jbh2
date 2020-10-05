function fishData(type, weight, speed, location) {
  this.type = type;
  this.weight = weight;
  this.speed = speed;
  this.location = location;

  this.getLocation = function() {
    return this.location;
  };

  this.Swim = function(x, y) {
    if (this.speed > 0) {
      this.location.x += x;
      this.location.y += y;
    }
  };

  this.Stop = function() {
    this.speed = 0;
  };

  this.printData = function() {
    return (
      this.name +
      ",  " +
      this.weight +
      ",  " +
      this.speed +
      ",  " +
      this.location +
      ",  " +
      this.swim +
      ",  " +
      this.stop +
      ",  " +
      this.eat
    );
  };
}

var fish1 = new fishData("fish", 150, 50, { x: 5, y: 2 });
var fish2 = new fishData("whale", 100, 50, { x: 2, y: 5 });
console;
