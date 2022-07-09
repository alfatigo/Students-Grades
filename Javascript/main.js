// Registro de notas de estudiantes.
// Formulario: Nombre, Apellido, Matricula, Nota
// Boton Guardar
// Crear una clase estudiante para almacenar los valores y representar el registro.
// Mostrar los datos de los estudiantes en una tabla (Nombre, Apellido, Matricula, Nota)
// Debajo de la tabla mostrar el promedio de todas las notas.
// Debe crear una función de flecha para calcular el promedio.

let students = [];
const avrgBtn = document.querySelector("#AvrgCalculation");
const addStudent = document.querySelector("#addStudent");
addStudent.addEventListener("click", (e) => {
  //prevent button propagation
  e.preventDefault();
  //Get Input values by ID
  const FirstName = document.getElementById("name").value;
  const LastName = document.getElementById("lastName").value;
  const Id = document.getElementById("Id").value;
  const Score = document.getElementById("score").value;

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

  //create a object using class
  let student = new Students(FirstName, LastName, Id, Score);

  //object
  Objtudents = {
    name: student.name,
    lname: student.lname,
    id: student.id,
    score: student.score,
  };


if(FirstName == "" || LastName == ""){
  console.log("error")
}

 //push object into array
  students.push(Objtudents);
 
  //insert into table the object values
  tName.innerHTML = student["name"];
  tLastname.innerHTML = student["lname"];
  tId.innerHTML = student["id"];
  tScore.innerHTML = student["score"];


 
});

const avrgTxt = document.querySelector("p");

avrgBtn.addEventListener("click", () => {
  
  const cal = students.reduce((a, b) => a + parseInt(b.score), 0);
  if (students.length > 0) {
    avrgTxt.innerHTML = `
<div>${cal / students.length}</div>
`;
  }
});
