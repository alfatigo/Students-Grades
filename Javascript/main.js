// Registro de notas de estudiantes.
// Formulario: Nombre, Apellido, Matricula, Nota
// Boton Guardar
// Crear una clase estudiante para almacenar los valores y representar el registro.
// Mostrar los datos de los estudiantes en una tabla (Nombre, Apellido, Matricula, Nota)
// Debajo de la tabla mostrar el promedio de todas las notas.
// Debe crear una función de flecha para calcular el promedio.


let students = [];
//this is for prevent propagation this mean that the button 
//wont be a echo and send multiple times information

window.addEventListener("submit", (e) => {
  //prevent button propagation
  e.preventDefault(); 
  //Get Input values by ID
  const FirstName = document.getElementById("name").value;
  const LastName = document.getElementById("lastName").value;
  const Id = document.getElementById("Id").value;
  const Score = document.getElementById("score").value;
  const addStudent = document.querySelector("#addStudent");
  //Get the table 
  const table = document.querySelector("table");
  //set where you wanna insert the row in the table
  let row = table.insertRow(1);
  //position for data in the table
  let cell = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
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
  every = {
    name: student.name,
    lname: student.lname,
    id: student.id,
    score: student.score,
  };
  //push object into array 
  students.push(student);
  //insert into table the object values
  cell.innerHTML = student["name"];
  cell2.innerHTML = student["lname"];
  cell3.innerHTML = student["id"];
  cell4.innerHTML = student["score"];
  cell5.innerHTML = student[""];
 
  
});
