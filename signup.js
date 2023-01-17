import navbar from "./component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let userArr = JSON.parse(localStorage.getItem("signup")) || [];
let Signup = (e) => {
  e.preventDefault();
  
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let pass = document.getElementById("password").value;

  if (name == "" || email == "" || pass == "") {
    alert("Please Fill All Details");
  } else {
    class user {
      password;
      constructor(n, email) {
        this.name = n;
      }

      signup(email, password) {
        let isvalidated = false;

        isvalidated =
          this.#validateemail(email) && this.#validatepass(password);

        if (isvalidated) {
          this.email = email;
          this.password = password;
          alert("User Registered successfully");
          userArr.push(this);
          localStorage.setItem("signup", JSON.stringify(userArr));
          window.location.href = "./login.html";
        } else {
          alert("please follow username and password rules");
        }
      }
      #validateemail(email) {
        return true;
      }

      #validatepass(password) {
        return true;
      }
    }
    let user1 = new user(name);

    user1.signup(email, pass);

    console.log(user1);
  }
};

let form = document.querySelector("form");
form.addEventListener("submit", Signup);
