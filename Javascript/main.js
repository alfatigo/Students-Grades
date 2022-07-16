let form = document.querySelector("form");
let students = [];

window.addEventListener("load", () => {
  const addStudent = document.querySelector("#addStudent");
  let local = JSON.parse(localStorage.getItem("students"));

  let table = document.querySelector("table");

  class Students {
    constructor(name, lname, id, score) {
      this.name = name;
      this.lname = lname;
      this.id = id;
      this.score = score;
    }
  }
  //#region input validation
  function inputValidator(firstName, lastName, id, score) {
    if (firstName != "" && lastName != "" && id != "" && score != "") {
      return true;
    } else {
      alert("Existen campos vacios!");
      return false;
    }
  }
  //#endregion
  addStudent.addEventListener("click", (e) => {
    e.preventDefault();
    //#region set input Buttons
    const FirstName = document.getElementById("name").value.trim();
    const LastName = document.getElementById("lastName").value.trim();
    const Id = document.getElementById("Id").value.trim();
    const Score = document.getElementById("score").value.trim();
    //#endregion
    // Create new student
    let student = new Students(FirstName, LastName, Id, Score);

    if (inputValidator(FirstName, lastName, Id, Score)) {
      //#region Table Position
      let row = table.insertRow(1);
      //position for data in the table
      let tName = row.insertCell(0);
      let tLastname = row.insertCell(1);
      let tId = row.insertCell(2);
      let tScore = row.insertCell(3);
      let editBtn = row.insertCell(4);
      let delBtn = row.insertCell(4);
      //#endregion

      //#region add Obj Student to Array
      students.push(student);
      //#endregion

      //#region Add student to tha table
      students.map((item, index) => {
        tName.textContent = item.name;
        tLastname.textContent = item.lname;
        tId.textContent = item.id;
        tScore.textContent = item.score;
        delBtn.innerHTML = `<i class='onDeletebtn material-icons' onClick='onDelete(this, ${index})'>delete</i>`;
      });
      //#endregion

      //Clear the input Form
      form.reset();
    } else {
    }

    localStorage.setItem("students", JSON.stringify(students));
  });
});

//#region Action Buttons

function onDelete(td, index) {
  if (confirm("Are you sure you want to delete this?")) {
    row = td.parentElement.parentElement;
    document.querySelector("table").deleteRow(row.rowIndex);
    students.splice(index, 1);
  }
}

//#endregion

//#region Get Average Score

const avrgBtn = document.querySelector("#AvrgCalculation");
const avrgTxt = document.querySelector("output");
avrgBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let avrg = students.reduce((a, b) => {
    return a + parseInt(b.score) / students.length;
  }, 0);

  if (avrg <= 0) alert("El promedio es menor o igual a 0");
  else avrgTxt.textContent = avrg;
});
//#endregion
