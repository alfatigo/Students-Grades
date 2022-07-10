let form = document.querySelector("form");
let students = [];
const avrgBtn = document.querySelector("#AvrgCalculation");
window.addEventListener("load", () => {
  const addStudent = document.querySelector("#addStudent");

  //constructor for students this initialize
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
      return false;
    }
  }
  addStudent.addEventListener("click", (e) => {
    e.preventDefault();
   
  


    const FirstName = document.getElementById("name").value;
    const LastName = document.getElementById("lastName").value;
    const Id = document.getElementById("Id").value;
    const Score = document.getElementById("score").value;

    let student = new Students(FirstName, LastName, Id, Score);

    if (inputValidator(FirstName, lastName, Id, Score)) {
      //Get the table
      const table = document.querySelector("table");
      //set where you wanna insert the row in the table
      let row = table.insertRow(1);
      //position for data in the table
      let tName = row.insertCell(0);
      let tLastname = row.insertCell(1);
      let tId = row.insertCell(2);
      let tScore = row.insertCell(3);
      let actionBtn = row.insertCell(4);

    
     let addInpt =  (item) => { 
        const inputRow = document.createElement('input');
        inputRow.type = 'text';
        inputRow.value = item; 
        inputRow.setAttribute('readonly','readonly');

        return inputRow
      
     }

      students.push(student);

      function del(index, arr, val){
            arr[index].name =val
      }
      students.map((item, index) => {
        tName.textContent = item.name
        tLastname.textContent = item.lname
        tId.textContent = item.id
        tScore.textContent = item.score


        
      });
      form.reset();
    } else {
      console.log(0);
    }
  });
 
});
const avrgTxt = document.querySelector("p");
avrgBtn.addEventListener("click", () => {
  e.preventDefault();
  let avrg = students.reduce((a, b) => {
    return a + parseInt(b.score) / students.length;
  }, 0);
  console.log(avrg);
});
