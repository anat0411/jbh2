function Fish(type,weight,speed,location){
    var self = this;
    self.type = type;
    self.weight = weight;
    self.life = 100;
    self.speed = speed;
    var location = location;

    self.swim = function(){
        self.getLocation().x += Math.floor(Math.random() * 5);
        self.getLocation().y += Math.floor(Math.random() * 5);
    }

    self.stop = function(){
        self.speed = 0;
    }

    self.eat = function(){
        self.weight += Math.floor(Math.random() * 20);
    }
    self.getLocation = function(){
        return location;
    }

    self.setLocation = function(val){
        location = val;
    }

    self.printData = function(){
        return self.type + ', Location ' + self.getLocation().x + ' - ' + self.getLocation().y;
    }



}