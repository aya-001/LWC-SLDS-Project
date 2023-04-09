/* console.log("hello world");

console.error("I am an error");

console.warn("I am a warning");

 var, let, const
 

for(let i=0; i<0; i++){

}
console.log(i); 

//-------------------------------------------------------------

//javascrit automatically define the data type String etc
const student  = 'Mai';
const studentRollNum = 11;
const isPresent = true;
const fees = null;
const age = undefined;
console.log(typeof student);

const greeting  = "Hello world This is greeting";
console.log(greeting.length);
console.log(greeting.length);
console.log(greeting.substring(0, 5)); //Helllo
console.log(greeting.substring(0,5).toUpperCase()); //HELLO
console.log(greeting.split(" "));
console.log(greeting.split(" ").length); //the number of item (each word)


//-------------------------------------------------------------
//Array
const rollNumbers = [11, 12, 13, 14, 11, 15, 17];
console.log(rollNumbers);
rollNumbers.push(16);
console.log(rollNumbers);

rollNumbers.pop(11); //pop eliminate the last item of array
console.log(rollNumbers);

rollNumbers[2] = 22;
console.log(rollNumbers);

console.log(rollNumbers.slice(0, 4)); //get 0~3rd item

rollNumbers.unshift(100); //add this item in the beginning of array
console.log(rollNumbers);

rollNumbers.sort(); //[100, 11, 11, 12, 14, 15, 17, 22]
console.log(rollNumbers);

rollNumbers.sort((a,b) => a - b);//[11, 11, 12, 14, 15, 17, 22, 100]
console.log(rollNumbers);

 */

//-------------------------------------------------------------
/* 
//Object
const student1 = {
    name: "Jhon",
    age: 23,
    age2:25,
    isPresent: true,
    fees: undefined,
    datesEhenAbsent: [2, 5, 17, 20],
    adredd : {
        street : "2nd street",
        pincode : "6543",
        city : "abc"
    },

};

console.log(Object.entries(student1));//get all the object keys and items
console.log(Object.keys(student1));
console.log(Object.values(student1));
console.log(student1.name);
console.log(student1["age"]);//get the item using "key"
console.log(student1["isPresent"]);

delete student1.fees; //delete item
delete student1["age2"]; //delete item
console.log(Object.entries(student1));

console.log("Jhon was absent on :", student1.datesEhenAbsent);


//-------------------------------------------------------------
const student2 = [student1, {
    name: "harrt",
    age: 21,
    isPresent: undefined,
    fees: undefined,
    datesEhenAbsent: [2, 17, 20],
    adredd : {
        street : "3rd street",
        pincode : "6543533",
        city : "abged"
    },
}];

console.log("Student2", student2); 
console.log("Student2" + JSON.stringify(student2)); //show all the properties with String type

//String concatenation
console.log("My name is" +  student1.name);
console.log(`My name is ${student1.name} and my age is ${student1.age}`); // ```` thsi one

//-------------------------------------------------------------

//⓵　functionS
function greet(){
    console.log("Hello World");
}
greet();  //Call function


//⓶
const greeting = function(){
    console.log("Hello Good Evening");
}
greeting();


//⓷
const greetings = () => {
    console.log("Good Evening");
};
greetings();

//④ with parameter
const greetings2 = (name, age, isPresent) => {
    console.log("Good Evening");
};
greetings2();

//-------------------------------------------------------------

//object, property
//function
const students = []; //variable
const addStudent = (stName, stAge, stAbsence, stAdress) => {
    const student = {
        name :stName,
        age: stAge,
        absence: stAbsence,
        adress: stAdress,
    }

    students.push(student);
}

//add actual date into function
addStudent('Jhon', 23, [5,9], {street: "22nd Street", pincode: "2365", city: "NY"});
addStudent('Ken', 26, [1,9], {street: "25nd Street", pincode: "2365", city: "TK"});

//see values
console.log(`Total students: ${students.length}`); //the number of Array
console.log(JSON.stringify(students));

//-------------------------------------------------------------
const sum = (a, b) => {
    return (a + b);
};

//or 
const sum1 = (a, b) => (a + b); // when one sentense or only return 

console.log(sum(4,5));

//-------------------------------------------------------------

//assignment op
let x = 9;
x = 19;
console.log(x);

//addition op
const xx = 9;
const y = 19;
let z = x + y;

console.log(z);

//subtraction op
const xxx = 9;
const yy = 19;
let zz = xxx - yy;

console.log(zz);

//compound op
let x1 = 9;
//x1 += 8;
x1 /= 8;
console.log(x1);



const x = 9;
const y = "9";
console.log(x == y); //tru
console.log(x === y); //false strict Equal operator //check Data type

console.log(x != y); 
console.log(x !== y); //strict Equal operator

console.log(x >= y); 



//Arthmetic op
const x = 9;
const y = 10;

console.log(x % y); //remainder
x++;
console.log(x % y);

 

let x = 9;
let y = 10;

console.log(x++); //9 console.log() is execute→＋＋
console.log(++y); //11　　＋＋　execute→　console.log() is execute


console.log(x--);
console.log(--x);


//-------------------------------------------------------------


//ternary op only for javascript

let x = 9;
let y = 10;

x > y ? console.log("x is bigger") : console.log("x is smaller");

//nested ternary op
x > y 
    ? console.log("x is bigger") 
    :( x < y 
        ? console.log("x is smaller")
        : console.log("both are equal")
    );

//-------------------------------------------------------------
//switch case

const dayOfWeek = 3;

switch(dayOfWeek){
    case 1:
    case 8: 
        console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
    break;
    default:
        console.log("Sunday");
        break;
}



//-------------------------------------------------------------

for(let x=0; x < 10; x++){
    console.log(x);
}



let y = 0;
while(y < 10){
    console.log(y);
    y++;
}


let x = 0;
do{
    console.log(x);
    x++;
}while(x < 10)

//-------------------------------------------------------------

const student = ["Jhon", "Harry", "Arogon", "Henry", "Ken"];

for(let x = 0; x < student.length; x++){
    console.log(student[x]);
    
}

for(let x = 0; x < student.length; x++){
    console.log(student[x]);
    break;
}

for(let x = 0; x < student.length; x++){
    console.log(student[x]);
    if(x === 2)
    break;
}


for(let x = 0; x < student.length; x++){
    if(x === 2)
    continue; //skip→ next loop
    console.log(student[x]);
    
}

//-------------------------------------------------------------


//for of loop

const students = ["Jhon", "Harry", "Arogon", "Henry", "Ken"];

for(let student of students){ //assign the each item to variable
    console.log(student);
}

//-------------------------------------------------------------
//★for(let A of B)

const students = [
    {
        name: "Jhon",
        age: 23,
        isPresent: true
    },
    {
        name: "Lily",
        age: 28,
        isPresent: true
    },
    {
        name: "Tim",
        age: 30,
        isPresent: false
    },
    {
        name: "Anna",
        age: 27,
        isPresent: false
    },
]


for(let student of students){ //assign the each item to variable
    console.log(student);
}

for(let student of students){ //assign the each item to vaFriable
    console.log(student.name);
}


//-------------------------------------------------------------
//★for(let A in B)


//Object
const student1 = {
    name: "Jhon",
    age: 23,
    age2:25,
    isPresent: true,
    fees: undefined,
    datesEhenAbsent: [2, 5, 17, 20],
    adredd : {
        street : "2nd street",
        pincode : "6543",
        city : "abc"
    },

};

//for in loop
for(let prop in student1){    //prop →key
    console.log(`${prop} : ${student1[prop]}`);
}



//-------------------------------------------------------------
//forEach loop 
//★Function

const students = [
    {
        name: "Jhon",
        age: 23,
        isPresent: true
    },
    {
        name: "Lily",
        age: 28,
        isPresent: true
    },
    {
        name: "Tim",
        age: 30,
        isPresent: false
    },
    {
        name: "Anna",
        age: 27,
        isPresent: false
    },
]

const students2 = [
    {
        name: "Legoals",
        age: 32,
        isPresent: false
    },
    
]


//forEach method
students.forEach(function (element){  //element→parameter
    console.log(element.name);
});




//return as map
const studentNames = students.map(function (element){
    return element.name;
});

console.log(studentNames);



//⓵return with any condition
const newArr = students.filter(function (element){
    return element.isPresent === false;
});

console.log(newArr); ///return all the elements under the condition

//⓶
const newArr2 = students.filter(function (element){
    return element.isPresent === false;
}).map((element) => element.name);

console.log(newArr2); ///return name  under the condition


//ES6 Spread Syntax  //combining 2 objects
const totalStudent = [...students, ...students2];
console.log(totalStudent);


//destructing  //set each array to j,a,g ..... → retrieve each array
const [j, a, g] = totalStudent;
console.log(j);
console.log(a);
console.log(g);



//---------------------------------------------------
//★combining properties


const stu1 = {
    name : "Rin",
    age : 29,
};

const stu2 = {
    isPresent : false,
   
};

const stu = {...stu1, ...stu2};
console.log(stu);

const stud = {...stu1, ...stu2, age:35}; //override
console.log(stud);


//destructing
const {name, isPresent} = stu;
console.log(name);
console.log(isPresent);





//---------------------------------------------------
//JSON Object
//JSON converts the element's data type  to String

const studentJson = {
    age : 23,
    name : "Jhones"
}

 //return in String type
console.log(JSON.stringify(studentJson));

const stuString = '{"age":23, "name": "Jon"}';
console.log(typeof stuString);

 //return in Object type
const stuJson = JSON.parse(stuString);
console.log(typeof stuJson);
console.log(stuJson);





//this　→　Student 
function Student(studentName, studentDob, studentSection){
    this.name = studentName;
    this.dob = studentDob;
    this.section = studentSection;
     this.greet = function(){
        console.log(`Hello ${this.name}`);
    }; 

     this.getAge = ()  => {
        const dob = new Date(this.dob);
        const differnce = Math.abs(new Date() - dob)/(1000*60*60*24);
        return differnce/365;
    } 
}


//★Math.abs() →returns the absolute value

//-----------------------------------------------------------

Student.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
};

Student.prototype.getAge = function() {
    const dob = new Date(this.dob);
    const differnce = Math.abs(new Date() - dob)/(1000*60*60*24);
    return differnce/365;
};


//new instance
const student1 = new Student("Jhon", "3-4-1992", "A201");
const student2 = new Student("Jhon2", "3-7-1992", "A205");
console.log(student2);

//call function
student2.greet();
//get Age //convert without Dcimal with Math.floor()
console.log(Math.floor(student2.getAge()));


//--------------------------------------------
//★Class

class Student{
    constructor(studentName,studentDob, studentSection){
        this.name = studentName;
        this.dob = studentDob;
        this.section = studentSection;
    }

   greet(){
        console.log(`Hello ${this.name}`);
    };
    
    getAge() {
        const dob = new Date(this.dob);
        const differnce = Math.abs(new Date() - dob)/(1000*60*60*24);
        return differnce/365;
    };
}

const student1 = new Student("Jhon", "3-4-1990", "A201");
const student2 = new Student("Jhon2", "3-7-1992", "A205");
console.log(student2);

//call function
student2.greet();
//get Age //convert without Dcimal with Math.floor()
console.log(Math.floor(student1.getAge()));

/*

//--------------------------------
//★　

//can change title name  in console
document.getElementsByTagName("div")[0].innerText = "Change2"

 

//------------------------------

//★get DOM element by javascript
console.log(document.getElementById("name"));
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("form-element"));

//change name of form
document.getElementById("name").value = "Jhone";


//---------------------------
//★Query Selector 
//quety HTML elememt
console.log(document.querySelector("#name"));
//query Class element //first element
console.log(document.querySelector(".form-element"));
//all the class
console.log(document.querySelectorAll(".form-element"));

//dremove element
const btn =  document.querySelector("button");
//btn.remove();

//change the text of button
btn.innerText = "Add New";
//change color of buttton
btn.style.background = "blue";

const container = document.querySelector(".container");
//can see class list
console.log(container.classList);
//add another class name
container.classList.add("adc");
console.log(container.classList)
//remove class
container.classList.remove("container");



//---------------------------------
//onclic event
const addStudent = (ev) => {
    ev.preventDefault(); //prevent auto page reflesh
    console.log(ev);
    console.log(ev.target);//can see the target(button)

    const btn = ev.target;
    btn.innerText = "Clicked";//as soon as clicked button, text changes
};



//--------------------------------------
//Class
const btn = document.querySelector("button");
btn.addEventListener("click", (ev) => {
    ev.preventDefault(); //prevent auto page reflesh
    const btn = ev.target;
    btn.innerText = "Clicked";//as soon as clicked button, text changes

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const cls = document.querySelector("#class").value;
    console.log(name, age, cls); //print in console

    //can see output under the inut areas
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML += `
    <div class="student-list-item">
        <div class="student-name">${name}</div>
        <div class"student-datail">
            <div>Age : ${age}</div>
            <div>Class : ${cls}</div>
        </div>
    </div>
    `; 

    //make text box blank
    document.querySelectorAll("input").forEach(element => {
        element.value = "";  //as soon as input finished, all texts get blank
    });
});

*/










