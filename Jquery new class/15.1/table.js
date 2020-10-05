//Submiting Data

//1) Register Handler:
$("form").submit(function(e) {
  e.preventDefault();
  //1.1 Get Values

  //1.2 insert new row

  //1.3 Clear form inputs
});

//1.1)
var name = $("input[name='name']").val();
var email = $("input[name='email']").val();

//1.2)
$(".data-table tbody").append(
  "<tr data-name='" +
    name +
    "' data-email='" +
    email +
    "'><td>" +
    name +
    "</td><td>" +
    email +
    "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>"
);

//1.3)
$("input[name='name']").val("");
$("input[name='email']").val("");

///////////////////////////////////////////////////

$("body").on("click", ".btn-edit", function() {
  //01)GET CURRENT VALUES FOR row
  //02)set all iNPUTS WITH VALUE AND EMBED IT
  //03) sET bUTTONS
  //04) hIDE BUTTON FOR EDIT
});

//01)//
var name = $(this)
  .parents("tr")
  .attr("data-name");
var email = $(this)
  .parents("tr")
  .attr("data-email");

//02) //

$(this)
  .parents("tr")
  .find("td:eq(0)")
  .html('<input name="edit_name" value="' + name + '">');
$(this)
  .parents("tr")
  .find("td:eq(1)")
  .html('<input name="edit_email" value="' + email + '">');

// 03)//
$(this)
  .parents("tr")
  .find("td:eq(2)")
  .prepend(
    "<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>"
  );

//04)//
$(this).hide();

///////////////////////////////////////////////////

$("body").on("click", ".btn-cancel", function() {
  var name = $(this)
    .parents("tr")
    .attr("data-name");
  var email = $(this)
    .parents("tr")
    .attr("data-email");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .text(name);
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .text(email);

  $(this)
    .parents("tr")
    .find(".btn-edit")
    .show();
  $(this)
    .parents("tr")
    .find(".btn-update")
    .remove();
  $(this)
    .parents("tr")
    .find(".btn-cancel")
    .remove();
});

///////////////////////////////////////////////////

$("body").on("click", ".btn-update", function() {
  var name = $(this)
    .parents("tr")
    .find("input[name='edit_name']")
    .val();
  var email = $(this)
    .parents("tr")
    .find("input[name='edit_email']")
    .val();

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .text(name);
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .text(email);

  $(this)
    .parents("tr")
    .attr("data-name", name);
  $(this)
    .parents("tr")
    .attr("data-email", email);

  $(this)
    .parents("tr")
    .find(".btn-edit")
    .show();
  $(this)
    .parents("tr")
    .find(".btn-cancel")
    .remove();
  $(this)
    .parents("tr")
    .find(".btn-update")
    .remove();
});

///////////////////////////////////////////////////

$("tbody").on("click", ".btn-delete", function() {
  $(this)
    .parents("tr")
    .remove();
});

///////////////////////////////////////////////////

var $row = $(this).parents("tr");
if ($row.index() === 1) return; // Don't go above the header
$row.prev().before($row.get(0));

///////////////////////////////////////////////////

//try

$("tr:not(:first)").each(function() {
  var $tds = $(this).find("td:not(:last)");
  var h = {};

  // Use the headers from earlier to name our hash keys
  headers.forEach(function(header, i) {
    h[header] = $tds.eq(i).text();
  });

  data.push(h);
});
