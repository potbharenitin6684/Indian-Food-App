import navbar from "./component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let logArr=JSON.parse(localStorage.getItem("logdata"))||[]
let  userArr=JSON.parse(localStorage.getItem("signup"))


let flag = false;
let login = (e) => {
  e.preventDefault();

  if(userArr==null){
    alert('Hey!! Your new user please Sign up First');
    window.location.href="signup.html"
}
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if(email=="" ||pass==""){
    alert("Please Fill All Details")
  }else{
    userArr.map((ele)=>{
  class user {
    password;
    constructor(n, email) {
      this.name = n;
    }

    signup(email, password) {
        this.email = email;
        this.password = password;
      }

      login(email, pass) {
        if (email == this.email && pass == this.password) {
          flag = true;
          logArr.push(this);
         localStorage.setItem("logdata",JSON.stringify(logArr));
        } 
      }
    
  }
  console.log(ele)
   
  let user1 = new user(ele.name);
  user1.signup(ele.email, ele.password);
  user1.login(email, pass);
  
  console.log(user1);

});
if(flag==true){
    alert("logged in sucessfully!!");
    window.location.href="./index.html"

  }else{
    alert("login failed,Your Data not Found");
    window.location.href="./signup.html"
  }
}
};


let form = document.querySelector("form");
form.addEventListener("submit", login);
