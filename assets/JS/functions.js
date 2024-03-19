let btn=document.getElementById("sendForm");
let tab=document.getElementById("usersTable");

let number=1;


function getForm(){
  let name=document.getElementById("student_name").value;
  let cours=document.getElementById("student_cours").value;
  let tz=document.getElementById("student_tz").value;
  let date=document.getElementById("student_date").value;
  let obj={
    name:name,
    cours:cours,
    tz:tz,
    date:date
  }

if(localStorage.length==0){
      number=1;
      obj.id=number;
      localStorage.setItem("student"+number,JSON.stringify(obj))
}
else{
      number=localStorage.length
      number++
      obj.id=number;
      localStorage.setItem("student"+number,JSON.stringify(obj))
}
alert("La sauvegarde a bien été effectuée!");
window.location.pathname="/listUser.html"; 
}



function sendForm(){
let keys = Object.keys(localStorage);
keys.sort();
keys.forEach((key,i)=>{
  let cle=localStorage.getItem(key);
  let valeur=JSON.parse(cle);
  let arr=`
  <tr>
  <th scope="row">3</th>
  <td>${valeur.cours} </td>
  <td>${valeur.name}</td>
  <td>${valeur.tz}</td>
  <td>${valeur.date}</td>
  <td><button type="button" class="btn btn-info"> Creation de carte</button></td>
  <td><button type="button" class="btn btn-danger">X</button></td>
</tr>`;
tab.innerHTML+=arr;


})

};

document.addEventListener('DOMContentLoaded', function(){
  if(window.location.pathname==="/listUser.html"){
    sendForm() 
  }
});
document.addEventListener('DOMContentLoaded', function(){
  if(window.location.pathname==="/addUser.html"){
    btn.addEventListener("click",getForm) 
  }
});







