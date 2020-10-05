"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var customerTypeName;
(function (customerTypeName) {
    customerTypeName[customerTypeName["regular"] = 0] = "regular";
    customerTypeName[customerTypeName["golden"] = 1] = "golden";
    customerTypeName[customerTypeName["normal"] = 2] = "normal";
})(customerTypeName || (customerTypeName = {}));
var Customer = /** @class */ (function () {
    function Customer(idVal, nameVal) {
        this.cycle = 0; //only can be changed or get excces inside Class
        this.id = idVal;
        this.name = nameVal;
        this.customerType = customerTypeName.normal;
    }
    Customer.prototype.calculatePrice = function (num) {
        var val = num * 1.17;
        console.log("Customer Calculate Price: " + val.toString());
        return val;
    };
    Customer.prototype.addToCycle = function (val) {
        this.cycle += val;
    };
    Customer.prototype.setCycle = function (num) {
        this.cycle = num;
    };
    Object.defineProperty(Customer.prototype, "Cycle", {
        get: function () {
            //geting the number after it was made private
            return this.cycle;
        },
        set: function (value) {
            //setting the value, then you can use it as a func
            if (value > 0)
                this.cycle = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var customer1 = new Customer("1", "IBM");
customer1.Cycle = 10; //set, because the data wasn't kept anywhere
var goldCustomer = /** @class */ (function (_super) {
    __extends(goldCustomer, _super);
    function goldCustomer(idVal, nameVal, discountVal) {
        var _this = _super.call(this, idVal, nameVal) || this;
        _this.discount = discountVal;
        _this.customerType = customerTypeName.golden;
        return _this;
    }
    goldCustomer.prototype.calculatePrice = function (num) {
        var baseCalc = _super.prototype.calculatePrice.call(this, num);
        var calcVal = baseCalc * this.discount;
        return calcVal;
    };
    return goldCustomer;
}(Customer));
var customer2 = new Customer("1", "Philips");
customer2.addToCycle(1000);
customer2.addToCycle(2000);
var res2 = customer2.calculatePrice(100);
customer2.addToCycle(res2);
console.log(customer2.Cycle);
var customer3 = new goldCustomer("2", "Intel", 0.3);
var res3 = customer3.calculatePrice(100);
customer3.addToCycle(res3);
console.log(customer3.Cycle);
//# sourceMappingURL=customer.js.map