var usernameData = false;
function inputValid(e)
{
  if(e.target.value.length < 3){
    console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.innerText = 'atleast 3 char required'
    e.target.nextElementSibling.style.display = 'block'
    return;
  }
  e.target.nextElementSibling.style.display = 'none';
  usernameData = true;
}
function submitData(e){
  e.preventDefault();
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  if(password.value.length < 11){
    console.log(password.nextElementSibling)
    password.nextElementSibling.innerText = 'weak password'
    return;
  }
  password.nextElementSibling.style.display = 'none'
  if(!usernameData ) return
   
  
var i= 0;
while(i < usersData.length){
  if(usersData[i].username === username.value){
    alert("username already exist!");
    return;
  }
  i++;
}
  usersData = [...usersData ,   { 
    username: username.value,
    password: password.value,
  }
]
  console.log(usersData);
  alert("Check the console log");
  username.value = ''; 
  password.value = '';
  usernameData = false;
}
var usersData = [
  {
    username: 'Muhib',
    password: '1234567890',
  },
  {
    username: 'Imtiaz',
    password: '1234567890354',
  },
  {
    username: 'Ashrib',
    password: '1234567890123',
  },
  {
    username: 'Aliyann',
    password: '0987654321xyz',
  },
  {
    username: 'Eshan',
    password: 'securepass123',
  }
]