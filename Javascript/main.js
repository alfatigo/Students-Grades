let students = [];
var local = JSON.parse(localStorage.getItem("students"));
let EditBtn = document.querySelector('#edit')
window.addEventListener("load", () => {
  let addStudent = document.querySelector("#addStudent");

  class Students {
    constructor(name, lname, id, score) {
      this.name = name;
      this.lname = lname;
      this.id = id;
      this.score = score;
    }
  }

  if (localValues(local, students)) {
    Render();
  }

  addStudent.addEventListener("click", (e) => {
    e.preventDefault();

    const FirstName = document.getElementById("name");
    const LastName = document.getElementById("lastName");
    const Id = document.getElementById("Id");
    const Score = document.getElementById("score");

    let student = new Students(
      FirstName.value,
      LastName.value,
      Id.value,
      Score.value
    );

    if (validator(FirstName.value, lastName.value, Id.value, Score.value)) {
      students.push(student);
      Render();
      form.reset();
      return (local = localStorage.setItem(
        "students",
        JSON.stringify(students.flat())
      ));
    } else {
    }
  });
});

function Render() {
  //#region Table Position
  let table = document.querySelector("table tbody");
  results = "";
  students.flat().forEach((item, index) => {
    results += `<tr>
        <td>
          ${item.name}     
        </td>
        <td>      
          ${item.lname} 
        </td>  
        <td>    
          ${item.id}  
        </td>  
        <td>  
        ${item.score}
        </td>  
        <td>  
          <i class='onDeletebtn material-icons' onClick='onDelete(this, ${index})'>delete</i>
          <i class='onEditBtn material-icons'onClick='onEdit(this,${index},${item.name},${item.lname},${item.id}, ${item.score})'>create</i>
          </td>  
      </tr>`;
  });

  table.innerHTML = results;
}
function validator(firstName, lastName, id, score) {
  if (firstName != "" && lastName != "" && id != "" && score != "") {
    {
      if (score < 100 || score > 0 ) {
      alert("Error! las notas deben ser mayor que 0 y menor que 100");
      return false;
    }
      return true
    }
  }  else {
    alert("Existen campos vacios!");
    return false;
  }
}

function onDelete(td, index) {
  if (confirm("Are you sure you want to delete this?")) {
    row = td.parentElement.parentElement;
    document.querySelector("table").deleteRow(row.rowIndex);
    local.splice(index, 1);
  }
  return localStorage.setItem("students", JSON.stringify(students.flat()));
}

const FirstName = document.getElementById("name");
const LastName = document.getElementById("lastName");
const Id = document.getElementById("Id");
const Score = document.getElementById("score");

function onEdit(td, index, name, lname, id, score) {
  FirstName.value = name;
  LastName.value  = lname
  Id.value = id;
  Score.value = score; 
  local[0].name = name;

  

}
function localValues(storageVal, current) {
  if (storageVal) {
    console.log(storageVal);
    current.push(storageVal);
    return true;
  } else return false;
}

const avrgBtn = document.querySelector("#AvrgCalculation");
const avrgTxt = document.querySelector("output");

avrgBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let avrg = students.reduce((a, b) => {
    return (a + parseInt(b[0].score) / local.length);
  }, 0);

  if (avrg <= 0) alert("El promedio es menor o igual a 0");
  else avrgTxt.textContent = avrg;
});
//#endregion
