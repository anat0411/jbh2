var cars = [
  { type: "BMW", price: "10000" },
  { type: "Audi", price: "20000" },
  { type: "Fiat", price: "7000" },
  { type: "Honda", price: "12000" },
  { type: "Kia", price: "9000" }
];

var discount = 10;

$(document).ready(function() {
  for (let i = 0; i < cars.length; i++) {
    var optionHTML = document.createElement("option");
    optionHTML.value = i + 1;
    optionHTML.innerHTML = cars[i].type;
    $("#cars").append(optionHTML);
  }

  $("#cars").on("change", function() {
    var val = $("#cars").val();
    $("#currentPrice").val(cars[val - 1].price);
  });

  findPriceForCar();
});

function findPriceForCar(car_type) {
  var result = "Price Not Found";
  $.each(cars, function(index) {
    if (cars[index].type == car_type) {
      result = cars[index].price;
    }
  });
  return result;
}

function calcResult() {
  let wanted_price = $("#wantedPrice").val();
  let current_price = $("#currentPrice").val();
  let payments = $("#payments").val();

  if (wanted_price >= current_price - (current_price * discount) / 100) {
    // you can buy
    $(".numberOfPayments").html(
      "Price Per Month: " + Math.floor(wanted_price / payments) + "$"
    );
  } else {
    // not enough
    $(".numberOfPayments").html("Not enough Cash");
  }
}
