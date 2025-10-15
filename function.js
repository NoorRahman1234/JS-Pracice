
// let name 
// let age
// let isstudent
// name="Noor"
// age="22"
// isstudent="yes"
// console.log (name)
// console.log (age)
// console.log (isstudent)


// Task No 2

// let num="100"
// let convertnum= Number(num)
// console.log(convertnum)
// console.log(typeof convertnum)


// Task No 3
// let Number1 = +prompt("Enter first Number");
// let Number2 = +prompt("Enter second number");
// add(Number1,Number2)
// function add(N1,N2){
// alert(N1*N2)
// }

// Task No 4
    // Declare variables
    // let a = null;       // 'null' means intentionally no value
    // let b;              // declared but not assigned → undefined
    // Print both
    // console.log("a =", a);  // Output: a = null
    // console.log("b =", b);  // Output: b = undefined
    // // 
   
     /*Difference:
    - null → assigned manually to represent "no value"
    - undefined → default value of uninitialized variables
    */
    // let input1 = prompt("Enter first value (true/false):").toLowerCase() === "true";
    // let input2 = prompt("Enter second value (true/false):").toLowerCase() === "false";
    // Perform AND, OR, NOT
    // console.log("Input 1:", input1);
    // console.log("Input 2:", input2);
    // console.log("AND (input1 && input2):", input1 && input2);
    // console.log("OR (input1 || input2):", input1 || input2);
    // console.log("NOT (!input1):", !input1);
    // console.log("NOT (!input2):", !input2);



// Conditions if else
    // let age=18
    // let userage= +prompt("Enter you age")
    // if(userage>=age){
    //     console.log("You can drive")
    // }
    //  else{
    //     console.log("You can not drive")
    // }


// Ternary Operator
//    userage >= age ? console.log("You can drive"): console.log("Youcan not drive");


   // If else Condidion    Date 26/09/25
// let age=18
//     let userage= prompt("Enter your age") 
//     if(userage>=20 && userage<=60){
//         console.log("You can drive")

//     }else if(userage<=5 && userage >=0){
//         console.log(" You cannot drive You are kid")
//     }else if(userage<=10 && userage >=5){
//         console.log(" You cannot drive You are not an adult")

//     }else if (userage>=11 && userage<=12){
//       console.log("You are a school boy")
//     }
//     else if (userage<=19 && userage >=13){
//         console.log(" You can only ride bysycle You are Tenager")

//     }else{
//         console.log("You are overage you are prohibited to drive")
//     }


    // Switch condition 
//   let day = +prompt("Enter a number (1-7) for the day of the week:");

// switch(day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid number! Please enter 1–7.");
// }


// Optimize code

// let day = +prompt("Enter a number from (1-7) for a day of the week:");

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// if(day >= 1 && day <= 7) {
//   console.log(days[day - 1]);  // -1 because array index starts from 0
// } else {
//   console.log("Invalid number! Please enter 1–7 for a day of the week");
// }



// Date 26 /9/25 Class Task  Vilidation
    // let userInput = prompt("Enter you number")
    // if(isNaN(userInput)){
    // console.log("You entered letter")
    // }else if(isNaN(userInput>0)){
    // console.log("This is a number")
    // }else if(userInput<=33 && userInput>=0){
    //     console.log("You are fail")
    // }else if(userInput>33 && userInput<50){
    //     console.log("you got D grade")
    // }else if(userInput>=50 && userInput<70){
    //     console.log("You got grade B")
    // }else if (userInput>=70 && userInput<90){
    //     console.log("You got grade A")
    // }else if(userInput>=90 && userInput<100){
    //     console.log("you got grade A+")
    // }else if(userInput<0){
    //     console.log(" please Enter positive number")
    // }
    // else if(userInput > 100){
    // console.log("please enter number less than 100")
    //    }
    //  else{
    // console.log("This is a  number")

    // }



// Class No 10
// Continue  ,   Break  ,  return 

//Continue

// for ( let i =1; i <=10 ;i++){
//     if(i === 6){
//         continue;
//         }
//     document.writeln(i)
// }

// Break
// for ( let i =1; i <=10 ;i++){
//     if(i === 6){
//         continue;
//         }
//     document.writeln(i)
// }

// Break
// for ( let i =1; i <=10 ;i++){
//     if(i === 4){
//         Break;
//         }
//     document.writeln(i)
// }

//return
// document.writeln(add())
// function add(){
//     document.writeln("Add two number")
//     return(2+2)
// }

// Class Task
//Print numbers divisible by 3 from 1 to 30

// let checkDivisibleBy3 = () => {
//     let limit = +prompt("Enter a number");

//     for (let i = 1; i <= limit; i++) {
//         if (i % 3 === 0) {
//             document.writeln(i + " is divisible by 3 ✅<br>");
//         } else {
//             document.writeln(i + " is not divisible by 3 ❌<br>");
//         }
//     }

//     // After finishing the loop, check if limit > 30
//     if (limit > 30) {
//         document.writeln("<br>Your number " + limit + " is greater than 30 🚀");
//     }
// };

// checkDivisibleBy3();
///////////////////////////////////////////////////////////////////////////////////
// For loop
// for (let i = 3; i <= 13; i++) {
//     document.writeln(i + "<br>");
// } 

////////////////////////////////////////////////////////////////////////////////////
// while loop with control
// let i = 1;
// while (i <= 10) {   // controlled by condition
//     document.writeln(i + "<br>");
//     i++;
// }

///////////////////////////////////////////////////////////////////////////////////
 // While Loop withour control
// let i = 1;
// while (true) {   // no condition, runs forever
//     document.writeln(i + "<br>");
//     i++;

//     if (i > 20) {   // manual break control
//         break;      // stops loop when i > 20
//     }
// }


///////////////////////////////////////////////////////////////////////////////

// function with parameters
// function add(a, b) {
//     document.writeln(a + b);
// }

// // calling function with arguments
// add(5, 10);   // a = 5, b = 10
// add(7, 3); 

//////////////////////////////////////////////////////////////////////////////////////
// Do while loop

// let i = 1;
// do {
//     document.writeln(i);
//     i++;
// } while (i <= 5);
//////////////////////////////////////////////////////////////////////////////////////

// Activity-Based Task: Student Report Generator   
// Date 1/10/2025
// let std={
//     name:prompt("Enter your Name"),
//     age: prompt("Enter your Age"),
//     marks:[],

// };
// function calculateAverage(marks){
//     for (let i=0; i<5; i++){
//          marks[i] = +prompt("Enter your Marks for subjects " +(i)+":");
//     }
//     let sum=0;
//     for (let i=0; i<marks.length; i++){
//         sum +=marks[i];
//     }
//     return sum / marks.length;
// }
// document.writeln("  <b>Name: &nbsp</b>" , std.name,"<br>" );  //  &nbsp  give space 
// document.writeln(" <b>Age: &nbsp</b>", std.age ,"<br>");
// document.writeln(" <b> Average Marks: &nbsp</b>",calculateAverage(std.marks).toFixed(2));    // to fixed(2) it will give two digit after point

/////////////////////////////////////////////////////

// Class No 11 
// Array and Array method.  1 push 2 pop 3 Shift 4 unshift
//Array and push method or function.
// let fruit =["Apple", "Mango", "Banana"];
// console.log(fruit);
// fruit.push("Pear");                                      // It will add an element to the last in the array
/////////////////////////////////////////////////////
// Array pop method 
// let subjects = ["Math","English","Urdu","Pak Study","Islamiat"];
// subjects.pop()                                  // it will remove the last element from the array
// document.writeln(subjects);

///////////////////////////////////////////////////////////////
// Array shift method 
// let subjects = ["Math","English","Urdu","Pak Study","Islamiat"];
// subjects.shift()                                  // it will remove the first element from the array
// document.writeln(subjects);
///////////////////////////////////////////////////////////
// Array unshift method 
// let subjects = ["Math","English","Urdu","Pak Study","Islamiat"];
// subjects.unshift("Science")                                  // it will add an element at the begining of an array
// document.writeln(subjects);

//////////////////////////////////////////////////////
// Object
// QNo:5 Create an object car with properties make, model, and year. 
// Print each property.
// let car={
//     Name: "Honda",
//     model: "23",
//     seats: "4",
//     Type: "Small",
//     year: "2024"
// }
// document.writeln(car.Name, "<br>");
// document.writeln(car.model , "<br>");
// document.writeln(car.seats , "<br>");
// document.writeln(car.Type , "<br>");
// document.writeln(car.year,  "<br>");
///////////////////////////////////////////////////////////////////////////////////
// Date 2/10/2025 
// ATM Cash Withdrawal
// If balance >= withdrawal amount allow withdrawal , else show "Insufficient Balance"
//     let Bal= prompt( "Enter Amount ")
//     if(Bal >= 100){
//         document.writeln("Withdrawal amount is allowed Withdrawal")
//     } else {
//         document.writeln("Withdrawal amount is not allowed")

//     }
///////////////////////////////////////////////////////////////////////////////////
    // DOM ( Document Object Model) Date 6/10/2025
  /**
   Activity-Based Task: Interactive To-Do List
	Create an interactive to-do list that allows users to add tasks, mark them as completed, and delete tasks.

Steps:
Create an input field and a button to add tasks.
Display each task in a list with a "Remove" button.
When a task is clicked, mark it as completed (toggle the CSS class).
When the "Remove" button is clicked, remove the task.
//    **/
//       Create the main div
    // const mainDiv = document.createElement("div");
    // mainDiv.style.width = "400px";
    // mainDiv.style.minHeight = "300px";
    // mainDiv.style.margin = "30px auto";
    // mainDiv.style.border = "3px solid black";
    // mainDiv.style.backgroundColor = "lightblue";
    // mainDiv.style.borderRadius = "10px";
    // mainDiv.style.padding = "20px";
    // mainDiv.style.textAlign = "center";
    // mainDiv.style.boxShadow = "0 0 10px gray";

    // // Add heading
    // const title = document.createElement("h2");
    // title.textContent = "My To-Do List";
    // mainDiv.appendChild(title);

    // // Create input field
    // const input = document.createElement("input");
    // input.type = "text";
    // input.placeholder = "Enter your marks";
    // input.style.padding = "8px";
    // input.style.width = "200px";
    // input.style.marginRight = "5px";
    // mainDiv.appendChild(input);

    // // Create Add button
    // const addBtn = document.createElement("button");
    // addBtn.textContent = "Add Task";
    // addBtn.style.padding = "8px 10px";
    // addBtn.style.cursor = "pointer";
    // mainDiv.appendChild(addBtn);

    // // Create list
    // const list = document.createElement("ul");
    // list.style.listStyle = "none";
    // list.style.padding = "0";
    // list.style.marginTop = "20px";
    // mainDiv.appendChild(list);

    // // Add div to body
    // document.body.appendChild(mainDiv);

    // // Add task functionality
    // addBtn.addEventListener("click", function() {
    //   const taskText = input.value.trim();
    //   if (taskText === "") return;                      // if condition.

    //   const li = document.createElement("li");
    //   li.textContent = taskText;
    //   li.style.backgroundColor = "white";
    //   li.style.margin = "5px 0";
    //   li.style.padding = "8px";
    //   li.style.borderRadius = "5px";
    //   li.style.display = "flex";
    //   li.style.justifyContent = "space-between";
    //   li.style.alignItems = "center";
    //   li.style.cursor = "pointer";
    //   li.style.boxShadow = "0 0 5px #aaa";


    // //   Create Remove button
    //   const removeBtn = document.createElement("button");
    //   removeBtn.textContent = "Remove";
    //   removeBtn.style.backgroundColor = "red";
    //   removeBtn.style.color = "white";
    //   removeBtn.style.border = "none";
    //   removeBtn.style.padding = "5px 8px";
    //   removeBtn.style.borderRadius = "3px";
    //   removeBtn.style.cursor = "pointer";


    // //   Remove task
    //   removeBtn.addEventListener("click", function(event) {
    //     event.stopPropagation(); // prevents toggling when removing
    //     list.removeChild(li);
    //   });

    //   li.appendChild(removeBtn);
    //   list.appendChild(li);
    //   input.value = "";
    // });

   
    //////////////////////////////////////////////////////////////////////////
    //  API in java Script  Fetch Api Data
    //Async and Await + Try and Catch
    // Try and Catch work like an if esle condition
    //  if there is not an error in if condition the block of code can be executed 
    // otherwise the esle block will be exicute 
    // async function getDataFromAPI() {
    //   try {
    //     // Fetch API data
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const data = await response.json();

    //     // Create title
    //     const heading = document.createElement("h2");
    //     heading.textContent = "Get Data from API";
    //     document.body.appendChild(heading);

    //     // Create table
    //     const table = document.createElement("table");

    //     // Create table header
    //     const headerRow = document.createElement("tr");
    //     const headers = ["ID", "Title", "Body"];
    //     headers.forEach(text => {
    //       const th = document.createElement("th");
    //       th.textContent = text;
    //       headerRow.appendChild(th);
    //     });
    //     table.appendChild(headerRow);

    //     // Add data rows
    //     data.forEach(post => {
    //       const row = document.createElement("tr");

    //       const idCell = document.createElement("td");
    //       idCell.textContent = post.id;
    //       row.appendChild(idCell);

    //       const titleCell = document.createElement("td");
    //       titleCell.textContent = post.title;
    //       row.appendChild(titleCell);

    //       const bodyCell = document.createElement("td");
    //       bodyCell.textContent = post.body;
    //       row.appendChild(bodyCell);

    //       table.appendChild(row);
    //       });

    //       Add table to page
    //       document.body.appendChild(table);

    //      } catch (error) {
    //      console.error("Error fetching data:", error);
    //   }
    // }
    // getDataFromAPI();

////////////////////////////////////////////////////////////////////////////////////////////

//     // Div
  
//     const mainDiv = document.createElement("div");
//     mainDiv.style.width = "400px";
//     mainDiv.style.minHeight = "300px";
//     mainDiv.style.margin = "30px auto";
//     mainDiv.style.border = "3px solid black";
//     mainDiv.style.backgroundColor = "lightblue";
//     mainDiv.style.borderRadius = "10px";
//     mainDiv.style.padding = "20px";
//     mainDiv.style.textAlign = "center";
//     mainDiv.style.boxShadow = "0 0 10px gray";
//     document.body.appendChild(mainDiv);
// // heading 
//     const title = document.createElement("h2");
//     title.innerText="Get data from Api";
//     mainDiv.appendChild(title);

// // Input Field 1
//  const inputfield = document.createElement("input");
//  inputfield.placeholder="Enter ID No";
//  inputfield.style.height="20px";
//  inputfield.style.width="80px";
//  inputfield.style.borderRadius="5px";
//  inputfield.style.padding="5px";
//  inputfield.style.display="flex";
//  inputfield.style.marginRight="300px";
//  inputfield.style.marginTop="50px";
//  mainDiv.appendChild(inputfield);

//  // Input Field 2
//  const inputfield2 = document.createElement("input");
//  inputfield2.placeholder="Enter your Name";
//  inputfield2.style.height="20px";
//  inputfield2.style.width="80px";
//  inputfield2.style.display="flex";
//  inputfield2.style.borderRadius="5px";
//  inputfield2.style.padding="5px";
//   inputfield2.style.marginRight="50px";
//  inputfield2.style.marginTop="-102px";
//  mainDiv.appendChild(inputfield2);
/////////////////////////////////////////////////////////////////////////////


// Import and Export from one file to another file
// function MyDisplayer(){
//  console.log("export from function.js file to script.js file"); 
// }
// export default MyDisplayer;
export const add = (a,b)=> a+b;