let form = document.querySelector("form");
let students = [];
// if(localStorage.getItem('students') == null){
//   localStorage.setItem('students', students);
// }

window.addEventListener("load", () => {
  const addStudent = document.querySelector("#addStudent");

  
  class Students {
    constructor(name, lname, id, score) {
      this.name = name;
      this.lname = lname;
      this.id = id;
      this.score = score;
    }
  }
 
  function inputValidator(firstName, lastName, id, score) {
    if (firstName != "" && lastName != "" && id != "" && score != "") {
      return true;
    } else {
      alert("Existen campos vacios!");
      return false;
    }
  }

  let actionContainer = document.createElement("div");
  actionContainer.classList.add("btn-area");

  let editBtn = document.createElement("input");

  function onEdit(item, index) {
    return editBtn;
  }

 
  addStudent.addEventListener("click", (e) => {
    e.preventDefault();
    const FirstName = document.getElementById("name").value.trim();
    const LastName = document.getElementById("lastName").value.trim();
    const Id = document.getElementById("Id").value.trim();
    const Score = document.getElementById("score").value.trim();

    let student = new Students(FirstName, LastName, Id, Score);

    if (inputValidator(FirstName, lastName, Id, Score)) {
    
      const table = document.querySelector("table");
      //set where you wanna insert the row in the table
      let row = table.insertRow(1);
      //position for data in the table
      let tName = row.insertCell(0);
      let tLastname = row.insertCell(1);
      let tId = row.insertCell(2);
      let tScore = row.insertCell(3);
      let editBtn = row.insertCell(4);
      let delBtn = row.insertCell(4);
    

      students.push(student);

      students.map((item, index) => {
        tName.textContent = item.name;
        tLastname.textContent = item.lname;
        tId.textContent = item.id;
        tScore.textContent = item.score;
      });
      form.reset();
    } else {
    }

    localStorage.setItem("students", JSON.stringify(students));

    console.log(JSON.parse(localStorage.getItem("students")));
  });

});

const avrgBtn = document.querySelector("#AvrgCalculation");
const avrgTxt = document.querySelector("output");
avrgBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let avrg = students.reduce((a, b) => {
    return a + parseInt(b.score) / students.length;
  }, 0);

  if(avrg <= 0)
    alert('El promedio es menor o igual a 0')
      else
      avrgTxt.textContent = avrg;

});
