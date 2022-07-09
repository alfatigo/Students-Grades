let students = [];
let form = document.querySelector("form");
const avrgBtn = document.querySelector("#AvrgCalculation");
window.addEventListener("load", () => {


  let status = false;
  const addStudent = document.querySelector("#addStudent");


  //Get the table
  const table = document.querySelector("table");
  //set where you wanna insert the row in the table
  let row = table.insertRow(1);
  //position for data in the table
  let tName = row.insertCell(0);
  let tLastname = row.insertCell(1);
  let tId = row.insertCell(2);
  let tScore = row.insertCell(3);

  //constructor for students this initialize
  class Students {
    constructor(name, lname, id, score) {
      this.name = name;
      this.lname = lname;
      this.id = id;
      this.score = score;
    }
  }



  addStudent.addEventListener('click', (e) => {
    const FirstName = document.getElementById("name").value;
    const LastName = document.getElementById("lastName").value;
    const Id = document.getElementById("Id").value;
    const Score = document.getElementById("score").value;
    let student = new Students(FirstName, LastName, Id, Score);
    e.preventDefault()
    if (
      student.name != " " ||
      student.lname != " " ||
      student.id != " " ||
      student.score != " "

    ) {
      console.log("true")
    } else {
      console.log('false')
    }
  });





  // students.push(student);

  // tName.innerHTML = student["name"];
  // tLastname.innerHTML = student["lname"];
  // tId.innerHTML = student["id"];
  // tScore.innerHTML = student["score"];
});

const avrgTxt = document.querySelector("p");

avrgBtn.addEventListener("click", () => {
  let avrg = students.reduce((a, b) => {
    return (a + parseInt(b.score) / students.length);
  }, 0);
  console.log(avrg)
});
