let text = ""
var payload = []

function onSubmit() {
   var Firstname = document.getElementById("fname").value;
   var Middlename = document.getElementById("mname").value;
   var Lastname = document.getElementById("lname").value;
   var checkboxes = document.getElementsByClassName("checkbox")

   text = ""
   index = 0 ;
   
   payload.length = 0
   for (const checkbox of checkboxes) {
       if(payload.length == 0 ) {
         document.getElementById("Sports").innerHTML = "No Selected Sports"
         console.log("test1");
       }
       if (checkbox.checked == true) {
        payload.push(checkbox.value);
        console.log("test2");
     
       }
   }
  payload.forEach(transformData);
  document.getElementById("fullname").innerHTML = Firstname  + " " + Middlename+ " "  + Lastname
  console.log("test3");
}

function transformData(item, index) {
     text += index + " " + item + "<br>";
     document.getElementById("Sports").innerHTML = text
     console.log("test4");
}