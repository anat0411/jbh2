"use strict";
var Vendor = /** @class */ (function () {
    //Constructor
    function Vendor(name) {
        this.name = name;
    }
    Vendor.prototype.greet = function () {
        return "Htllo, welcome to " + this.name;
    };
    return Vendor;
}());
var v1 = new Vendor("DFF DDD GGG");
console.log(v1.greet());
v1.name;
//# sourceMappingURL=classesTs.js.map