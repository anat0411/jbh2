class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat() {
    return `${this.name} is eating!`;
  }

  sleep() {
    return `${this.name} is sleeping!`;
  }

  wakeUp() {
    return `${this.name} is waking up!`;
  }
}

class Bird extends Animal {
  constructor(name, weight, timeWakeUp) {
    super(name, weight);
    this.timeWakeUp = timeWakeUp;
  }
  tweet(sound) {
    console.log("tweet " + sound);
  }
}

class Dog extends Animal {
  constructor(name, weight, isDangerous) {
    super(name, weight);
    this.isDangerous = isDangerous;
  }
  bark(sound) {
    console.log("bark" + sound);
  }
}

let a1 = new Animal("Hippo", 300);
a1.eat();

let a2 = new Animal("Tigris", 100);
a2.eat();
a2.wakeUp();

let b1 = new Bird("Parrot", 10, 5);
b1.wakeUp();
b1.tweet("Zif-Zif-Zif");
