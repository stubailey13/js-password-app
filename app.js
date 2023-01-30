//functions on form submit:
let form=document.getElementById("passwordForm");
function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
   //Reset inputs to empty
   form.reset();
}
//Calling a function during form submission.
form.addEventListener('submit', submitForm);

//Generate new password function
function genPassword() {
    let password = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
  document.querySelector("#InputPass").value = password;
 };
//Calling the function during button click.
try {
    document.querySelector("#GenerateBtn").addEventListener('click', (e) => genPassword());
} catch(error) {console.error(error)};

//Save new password = add new row to table
function savePassword() {
    let table = document.querySelector(".table");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = document.querySelector("#nameInput").value;
    cell2.innerHTML = document.querySelector("#urlInput").value;
    cell3.innerHTML = document.querySelector("#usernameInput").value;
    cell4.innerHTML = document.querySelector("#InputPass").value;
}
//Calling the function during button click.
try {
    document.querySelector("#saveBtn").addEventListener('click', () => savePassword())
} catch(error) {console.error(error)};

