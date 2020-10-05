class Fish {
  type: String;
  location: String;
  speed: Number;
  weight: Number;

  constructor(type, location, speed, weight) {
    this.type = type;
    this.location = location;
    this.speed = speed;
    this.weight = weight;
  }
}

let seal = new Fish("fish", "south", 180, 80);
