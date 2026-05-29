/*let age = 18
let secondaryschool = false

if (age >=18 && secondaryschool){
    console.log("You are in university")
} else if(age <18 && secondaryschool){
    console.log("You are in university")
}else{
     console.log("You are in secondaryschool")
}
     let openGame = false
     let phonestorage = false
   
if(openGame && phonestorage){
    console.log("app opens");
} else if(openGame || phonestorage){
    console.log("Fix your phone")}
    else( 
        console.log("Sell your phone")
    )
    
    let month = "May";

    switch(month){
       case "January":
        console.log("First month of the year");
        break;

        case ("December"):
            console.log("Lat month of the year");
            break;

        default:
            console.log("A month in the year");
}

let score = 140;
let grade;

if(score <= 100 && score >=70){
    grade = "A";
    console.log("A");
}
else if(score <= 69 && score >=60){
    grade = "B";
    console.log("B");
}
else if(score <= 59 && score >=50){
    grade = "C";
    console.log("C");
}
else if(score <= 49 && score >=45){
    grade = "D";
    console.log("D");
}
else if(score <= 44 && score >=40){
    grade = "E";
    console.log("E");
}
else if(score <= 39 && score >=0){
    grade = "F";
    console.log("F");
}
else{
    console.log("You didn't seat for this exam");
}

switch (grade) {
    case (grade = "A"):
        console.log("Distinction");
        break;

    case (grade = "B"):
        console.log("Very Good");
        break;

    case (grade = "C"):
        console.log("Credit");
        break;

    case (grade = "D"):
        console.log("Below Average");
        break;
 
    case (grade = "E"):
        console.log("Poor");
        break;
   
    case (grade = "F"):
        console.log("Failed");
        break;

    default:
        console.log("Invalid")
        break;
}

let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

function checkFruit(fruits){

    let epic = true

    if (epic){

        switch () {

            case "Apple":
                console.log("Apple is good for health.");
                break;

            case "Banana":
                console.log("Banana gives energy.");
                break;

            case "Orange":
                console.log("Orange is rich in Vitamin C.");
                break;

            case "Mango":
                console.log("Mango is called the king of fruits.");
                break;

            case "Pineapple":
                console.log("Pineapple is sweet and juicy.");
                break;

            default:
                console.log("Fruit found.");
        }

    } else {
        console.log("Fruit does not exist in the array.");
    }
}
checkFruit("Pineapple");

let studentNames = ["Felix", "Henry", "Putin"];

newStudent = studentNames.pop();
studentNames.push("Kimmich");
studentNames.shift();
newStudents = studentNames.unshift("Victor");

console.log(studentNames);

let firstName = 'Felix';
let lastName =  'Nworu';
let Age = '21';
let fullSentence = 'Hello,my name is '+ firstName+' Chinemerem '+lastName+ ' and i am ' + Age + ' yrs old.';
console.log(fullSentence);

function canRegister(name, feesPaid, hasScholarship) {
  if (name == "" && feesPaid == false || hasScholarship == false) {
    return "Thumbs up";
  } else {
    return "Thumbs down";
  }
}
console.log(canRegister("Ray", true, true));

let creditunit = 50;
function level(creditunit) {
  if (creditunit >= 0 && creditunit <=30 ) {
    return "100 Level";
  } else if (creditunit >= 31 && creditunit <= 60) {
    return "200 Level";
  } else if (creditunit >= 61 && creditunit <= 90) {
    return "300 Level";
  } else {
    return "400 Level";
  }
  return level;
}
console.log(level(50))

let courseCode = "ECE407"

  switch (courseCode) {
    case "ECE405":
      console.log("Course: Microprocessors and microcontrollers");
      break;
    case "ECE421":
      console.log("Course: Assembly Language programming");
      break;
    case "ECE431":
      console.log("Course: Fundamentals of Digital Communication.");
      break;
    default:
      console.log("Course code not found.");
  }

let myArray = [1,2,3,4,5];
console.log(myArray[2]);

function calculator( num1, num2, sum ) {

  switch (sum){
    case 'add':
        console.log(num1 + num2)
        break;
    case 'subtract':
        console.log(num1 - num2)
        break;

        default:
            console.log('Invaild code')
    
  }
}

console.log(calculator(10, 5, 'subtract'));


let score= [50,60,70,39,65];

for(let i = 0; i < score.length; i++ ){
    console.log(score[i])
    if(score [i] >=50){
         console.log('Passed');
    } else {
    console.log('Failed');
}
}

let names = ["Amy", "Chidi", "Chioma", "Emeka", "Ifesinachi", "Oluchi"];

for(let i = 0; i < names.length; i++ ){
    console.log(names[i]);
}

let count = 0
for(let i = 0; i < names.length; i++ ){
    if(names[i].length >= 5){
        count++;
    }
}

console.log(count);

   
 let student = {
    name: "Felix",
    age : 21,
    course : "Electronics and Computer Engineering",
    isGraduate : "Next Year",
}

student.age = 18;
student.level = 400;

console.log(student.name);
console.log(student.age);
console.log(student.level);

console.log(student);


let collection = {
    1:{
        album: "Thriller"
        
    },
    2:{
        album: "Divide",
        artist: "Ed Sheeran",
        tracks: []}
    };

    function updateRecords (id, prop, value) {
        if(value === "") {
            delete collection [id] [prop];}
        else if(prop === "tracks"){
            collection [id] [prop] = collection [id] [prop] || [];
            collection [id] [prop] . push(value);}
        else{
            collection [id] [prop] = value;}
        return collection;} 
        updateRecords (2, "tracks", "Shape of You");

        console.log(collection);

    let inputField = document.getElementById('userInput');
    let button = document.getElementById('submitBtn');
    let paragraph = document.getElementById('displayText');

    button.addEventListener('click', function() {
      let value = inputField.value;
    paragraph.innerText = value;
    });


    let textValue = document.getElementById('text');
    let resultText = document.getElementById('result');

    let age;

    function ageCal() {
        age = textValue.ariaValueMax;
        age = Number(age);

    if(age>70) {
        resultText.textContent = 'You are too old'
    } else if(age >= 18 && age <= 69) {
        resultText.textContent = 'You can drive'
    } else if(age<17 && age>=2) {
        resultText.textContent = 'You are underage'
    } else {
        resultText.textContent = 'You are too young'
    }
    }


    let menuBtn = document.getElementById('menuBtn');
    let navlinks = document.getElementById('navLinks');
    let icon = menuBtn.querySelector(i);


    menuBtn.addEventListener('click',function() {
        navLinks.classList.toggle('active');

        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars')
            icon.classList.add(fa-user)
        } else{
            icon.classList.remove(fa-user)
            icon.classList.add('fa-bars')
        }
    })


let hamburger = document.getElementById("hamburger");
let navLinks = document.querySelector(".nav-links");
let icon = hamburger.querySelector("i");


hamburger.addEventListener("click", function() {

    
    navLinks.classList.toggle("active");

    
    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});*/












