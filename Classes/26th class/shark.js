function sharkData(type, weight, speed, location, teeth) {
  fishData.call(this, type, weight, speed, location, swim, stop, eat);
  this.teeth = teeth;

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
      this.eat +
      ",  " +
      this.teeth
    );
  };
}
