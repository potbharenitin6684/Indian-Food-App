import { getdata, append } from "./component/fetch.js";

import navbar from "./component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let display = document.getElementById("display");
display.innerHTML = "";

let recipe_of_day = async () => {
  let data = await getdata();
  append(data, display);
  // console.log(data)
};

let body = document.querySelector("body");
body.addEventListener("load", recipe_of_day());

//    onload="recipe_of_day()
