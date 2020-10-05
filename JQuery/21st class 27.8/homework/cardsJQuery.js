var count_id = 1;

var user1 = {
  id: count_id++,
  name: "Rom",
  phone_number: "098-6765432",
  salary: 10000,
  age: 32,
  specialities: [
    { name: "Lectures", level: 3, seniority: 7 },
    { name: "Singing", level: 5, seniority: 10 },
    { name: "Reading", level: 2, seniority: 20 }
  ],
  image: `data:image/jpeg;base64,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`
};
var user2 = {
  id: count_id++,
  name: "Lora",
  phone_number: "076-8752345",
  salary: 15000,
  age: 27,
  specialities: [
    { name: "Dancing", level: 20, seniority: 10 },
    { name: "Painting", level: 4, seniority: 2 },
    { name: "Computer Science", level: 6, seniority: 2 }
  ],
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkY4xcrzl37SshYk_9In-r2ml3QaBdCEwoOFh1VcX1p46yNeQ`
};

var user3 = {
  id: count_id++,
  name: "Ben",
  phone_number: "043-9876543",
  salary: 3200,
  age: 43,
  specialities: [
    { name: "Watching TV", level: 10, seniority: 30 },
    { name: "Walking", level: 5, seniority: 3 },
    { name: "Yelling", level: 7, seniority: 20 }
  ],
  image: `data:image/jpeg;base64,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`
};

var user4 = {
  id: count_id++,
  name: "Tom",
  phone_number: "035-9087256",
  salary: 1000,
  age: 9,
  specialities: [
    { name: "Playing Basketball", level: 20, seniority: 3 },
    { name: "Math", level: 7, seniority: 5 },
    { name: "Drawing", level: 1, seniority: 1 }
  ],
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIywYO-UHblwFSD612F89YF0tBKUSslRK8jC1evywA5aoZDcm8lw`
};

var user5 = {
  id: count_id++,
  name: "Noa",
  phone_number: "076-9834256",
  salary: 17000,
  age: 35,
  specialities: [
    { name: "Jogging", level: 5, seniority: 10 },
    { name: "Crossfit", level: 2, seniority: 1 },
    { name: "Texting", level: 4, seniority: 7 }
  ],
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0ZmG7WgKehBHRvEamTe7UG-tAZw-4x75r4YpLdTRKsCS6sWh5w`
};

var users = [user1, user2, user3, user4, user5];

printUsers(users);

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    pushUser(users[i], i);
  }
}

function pushUser(user, index, elem) {
  console.log(user);

  let div_col_md_2 = $("<div></div>"); //main div, using grid
  div_col_md_2.attr("class", "col-md-4");

  let div_card = $("<div></div>"); //div for the cards
  div_card.attr("class", "card mt-3 mb-3");
  div_card.attr("id", user.id + "N");

  let div_main_img = $("<div></div>"); // div for the image
  div_main_img.attr("class", "main-img");

  let div_img = $("<img/>");
  div_img.attr("class", "card-img-top");
  div_img.attr("src", user.image);

  let div_data = $("<div></div>"); //div for the info
  div_data.attr("class", "data");

  let div_wrap_name = $("<div></div>"); // div for the names

  let div_wrap_age = $("<div></div>"); // div for the ages

  let div_wrap_phone_number = $("<div></div>"); // div for the phone numbers

  let div_wrap_salary = $("<div></div>"); // div for the salaries

  let label_name = $("<label></label>"); //label for the name
  label_name.attr("class", "name text-muted");
  let span_name = $("<p></p>"); //span for the name
  span_name.attr("class", "h1");
  label_name.html("Hi! I'm... ");
  span_name.html(user.name); //the loop

  let label_age = $("<label></label>"); //label for the age
  let span_age = $("<p></p>"); //span for the age
  label_age.html("Age ");
  label_age.attr("class", "font-weight-bold");
  span_age.html(user.age); //the loop

  let label_phone_number = $("<label></label>"); //label for the phone number
  let span_phone_number = $("<p></p>"); //span for the phone number
  label_phone_number.html("Phone Number ");
  label_phone_number.attr("class", "font-weight-bold");
  span_phone_number.html(user.phone_number); //the loop

  let label_salary = $("<label></label>"); //label for the phone salary
  let span_salary = $("<p></p>"); //span for the salary
  label_salary.html("Salary ");
  label_salary.attr("class", "font-weight-bold");
  span_salary.html(user.salary); //the loop

  let div_user_x = $("<div></div>"); //div
  div_user_x.attr("class", "deleteUser mt-3 mb-3");
  div_user_x.attr("id", user.id);
  div_user_x.html("Delete User Number " + user.id);
  div_user_x.on("click", function() {
    for (let x = 0; x < users.length; x++) {
      if (users[x].id == user.id) {
        users.splice(x, 1);
        div_col_md_2.remove();
        console.log(users.length);
      }
    }
  });

  div_col_md_2.append(div_card);
  div_card.append(div_user_x);
  div_card.append(div_main_img);
  div_main_img.append(div_img);
  div_card.append(div_data);
  div_data.append(div_wrap_name);
  div_data.append(div_wrap_age);
  div_data.append(div_wrap_phone_number);
  div_data.append(div_wrap_salary);

  div_wrap_name.append(label_name);
  div_wrap_name.append(span_name);
  div_wrap_age.append(label_age);
  div_wrap_age.append(span_age);
  div_wrap_phone_number.append(label_phone_number);
  div_wrap_phone_number.append(span_phone_number);
  div_wrap_salary.append(label_salary);
  div_wrap_salary.append(span_salary);

  let getProfessions_div = getProfessionsDiv(user.specialities);
  div_data.append(getProfessions_div);

  if (elem) {
    elem.append(div_col_md_2);
  } else {
    $(".users").append(div_col_md_2);
  }
}

function getProfessionsDiv(list) {
  let div_professions = $("<div></div>"); //div professions
  div_professions.attr("class", "mt-3 mb-3");
  for (let j = 0; j < list.length; j++) {
    let div_wrap_professions = $("<div></div>"); // div wrapper for professions

    let label_name = $("<label></label>"); // label for profession's name
    label_name.html(list[j].name);
    label_name.attr("class", "mt-3 mb-3 font-weight-bold");

    let div_wrap_level = $("<div></div>"); //div wrapper for the level
    let label_level = $("<label></label>"); // label for profession's level
    let span_level = $("<span></span>"); // span for profession's level
    label_level.html("Level: ");
    span_level.html(" " + list[j].level);

    let div_wrap_seniority = $("<div></div>"); //div wrapper for the seniority
    let label_seniority = $("<label></label>"); // label for profession's seniority
    let span_seniority = $("<span></span>"); // span for profession's seniority
    label_seniority.html("Seniority: ");
    span_seniority.html(" " + list[j].seniority);

    div_professions.append(div_wrap_professions);
    div_wrap_professions.append(label_name);
    div_wrap_professions.append(div_wrap_level);
    div_wrap_professions.append(div_wrap_seniority);
    div_wrap_level.append(label_level);
    div_wrap_level.append(span_level);
    div_wrap_seniority.append(label_seniority);
    div_wrap_seniority.append(span_seniority);

    label_level.attr("class", "label_level");
    label_seniority.attr("class", "label_seniority");
    label_name.attr("class", "label_name");
  }
  return div_professions;
}

function newUser() {
  console.log("Add user");
  var NewUser = {
    id: count_id++,
    name: $("#user_name").val(),
    phone_number: $("#user_phone").val(),
    salary: $("#user_salary").val(),
    age: $("#user_age").val(),
    image: $("#image_url").val()
      ? $("#image_url").val()
      : "https://png.pngtree.com/svg/20160601/5849362f9c.svg",
    specialities: [
      {
        name: $("#user_speciality").val(),
        level: $("#user_level").val(),
        seniority: $("#user_seniority").val()
      }
    ]
  };

  // console.log(users);

  pushUser(NewUser);
  users.push(NewUser);
}

var button = $(".btn");

button.on("click", newUser);
