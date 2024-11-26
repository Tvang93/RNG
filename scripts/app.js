let firstNameLocation = document.getElementById("firstNameLocation");
let lastNameLocation = document.getElementById("lastNameLocation");
let codestackEmailLocation = document.getElementById("codestackEmailLocation");
let emailLocation = document.getElementById("emailLocation");
let roleLocation = document.getElementById("roleLocation");
let randomNameBtn = document.getElementById("randomNameBtn");
let lastPersonName1 = document.getElementById("lastPersonName1");
let lastPersonName2 = document.getElementById("lastPersonName2");
let lastPersonName3 = document.getElementById("lastPersonName3");
let lastPersonName4 = document.getElementById("lastPersonName4");
let lastPersonName5 = document.getElementById("lastPersonName5");

let createElementBool = false;
let previousArr = ["", "", "", "", ""];
let candyCane = false;

function getNameData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      return data.people;
    });
}

function getRandomName(people) {
  let randomIndex = Math.floor(Math.random() * people.length);
  console.log(people[randomIndex]);
  return people[randomIndex];
}

randomNameBtn.addEventListener("click", function () {
  getNameData().then((people) => {
    let randomName = getRandomName(people);
    previousArr[4] = previousArr[3];
    previousArr[3] = previousArr[2];
    previousArr[2] = previousArr[1];
    previousArr[1] = previousArr[0];
    if (createElementBool) {
      let rngFirstName = document.getElementById("rngFirstName");
      rngFirstName.textContent = randomName.firstName;
      let rngLastName = document.getElementById("rngLastName");
      rngLastName.textContent = randomName.lastName;
      let rngCodestackEmail = document.getElementById("rngCodestackEmail");
      rngCodestackEmail.textContent = randomName.codestackEmail;
      let rngEmail = document.getElementById("rngEmail");
      rngEmail.textContent = randomName.email;
      let rngRole = document.getElementById("rngRole");
      rngRole.textContent = randomName.role;
      previousArr[0] = `${randomName.firstName} ${randomName.lastName}`;
      lastPersonName1.textContent = previousArr[0];
      lastPersonName2.textContent = previousArr[1];
      lastPersonName3.textContent = previousArr[2];
      lastPersonName4.textContent = previousArr[3];
      lastPersonName5.textContent = previousArr[4];
    } else {
      createName(randomName);
      createElementBool = true;
      previousArr[0] = `${randomName.firstName} ${randomName.lastName}`;
      lastPersonName1.textContent = previousArr[0];
    }
  });

  if (candyCane) {
    lastPersonName1.className = "bg-white text-danger";
    lastPersonName2.className = "bg-danger";
    lastPersonName3.className = "bg-white text-danger";
    lastPersonName4.className = "bg-danger";
    lastPersonName5.className = "bg-white text-danger";
  } else {
    lastPersonName1.className = "bg-danger";
    lastPersonName2.className = "bg-white text-danger";
    lastPersonName3.className = "bg-danger";
    lastPersonName4.className = "bg-white text-danger";
    lastPersonName5.className = "bg-danger";
  }
  switchCandyCane();
});

function createName(randomName) {
  let pTag1 = document.createElement("p");
  pTag1.textContent = randomName.firstName;
  pTag1.id = "rngFirstName";
  firstNameLocation.appendChild(pTag1);
  let pTag2 = document.createElement("p");
  pTag2.textContent = randomName.lastName;
  pTag2.id = "rngLastName";
  lastNameLocation.appendChild(pTag2);
  let pTag3 = document.createElement("p");
  pTag3.textContent = randomName.codestackEmail;
  pTag3.id = "rngCodestackEmail";
  codestackEmailLocation.appendChild(pTag3);
  let pTag4 = document.createElement("p");
  pTag4.textContent = randomName.email;
  pTag4.id = "rngEmail";
  emailLocation.appendChild(pTag4);
  let pTag5 = document.createElement("p");
  pTag5.textContent = randomName.role;
  pTag5.id = "rngRole";
  roleLocation.appendChild(pTag5);
}

function switchCandyCane() {
  candyCane = !candyCane;
}
