function Person(name,age,phone){
    this.name = name;
    this.age = age;
    this.phone = phone;

    this.getName = function(){
        return "My Name is: " + this.name;
    }
}



/******** My Program **********/
var saar = new Person('Saar',36,'0502525255');
var saar2 = new Person('Saar2',36,'0502525255');
var saar3 = new Person('Saar3',36,'0502525255');
var saar4 = new Person('Saar4',36,'0502525255');
var saar5 = new Person('Saar5',36,'0502525255');
console.log( saar.getName() );
console.log( saar2.getName() );
console.log( saar3.getName() );
console.log( saar4.getName() );
console.log( saar5.getName() );
console.log( typeof saar);


