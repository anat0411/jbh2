var cars = [
    { type: "BMW", price: 100000 },
    { type: "VOLVO", price: 200000 },
    { type: "SEAT", price: 50000 },
    { type: "SUBARU", price: 80000 },
    { type: "MERCEDES", price: 150000 },
];
const discount = 10;
const payments = 12;


$(document).ready(function () {
    fillCarsListSelect();
    fillPaymentsList();
    $("#cars_list").on("change", function () {
        let price = findPriceForCar($(this).val());
        $("#current_price").val(price);
    });

    $("#calc_btn").on("click", function () {
        calcResult();
    });
});

function fillCarsListSelect() {
    $.each(cars, function (index) {
        //let option = $(`<option value='${cars[index].type}'>${cars[index].type}</option>`);
        let option = $(`<option value='${this.type}'>${this.type}</option>`);
        $("#cars_list").append(option);
    });
}

function fillPaymentsList() {
    for (let i = 0; i < payments; i++) {
        let option = $(`<option value='${i + 1}' id='${i + 1}'>${i + 1}</option>`);
        //$(option).attr("saar", i);
        $("#payments").append(option);
    }
}

function findPriceForCar(car_type) {
    var result = "Price Not Found";
    $.each(cars, function (index) {
        if (cars[index].type == car_type) {
            result = cars[index].price;
        }
    });
    return result;
}

function calcResult() {
    let wanted_price = $("#wanted_price").val();
    let current_price = $("#current_price").val();
    let payments = $("#payments").val();

    if (wanted_price >= current_price - (current_price * discount / 100)) {
        // you can buy
        $(".result").html("Price Per Month: " + Math.floor(wanted_price / payments) + "$");
    } else {
        // not enough
        $(".result").html("Not enough Cash");
    }
}