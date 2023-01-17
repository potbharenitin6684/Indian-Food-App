// import navbar from "./component/navbar.js";
// let nav = document.getElementById("navbar");
// nav.innerHTML = navbar();

let loguser=()=>{
let logArr=JSON.parse(localStorage.getItem("logdata"));
if(logArr==null){
  alert("Please Log in First");
  window.location.href="login.html"
}else{
 let name=document.getElementById("userName");
 logArr.map((ele)=>{
name.innerText=ele.name;
 })
}
}
loguser()
let Recipe_of_the = () => {
  window.location.href = "recipe_of_day.html";
};

let randomRec = () => {
  window.location.href = "randomRec.html";
};


let id;
let debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
};

let recipe = async () => {
  let search = document.getElementById("search").value;
  let data = await getdata(search);
  append(data);
};

let getdata = async (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  let res = await fetch(url);
  let data = await res.json();
  console.log("xx", data);
  return data.meals;
};

let container = document.getElementById("container");
let append = (data) => {
  let main = document.getElementById("showFullRecipe");
  main.innerHTML = "";
  container.innerHTML = "";
  if (data == null) {
    let img = document.createElement("img");
    img.setAttribute("id", "err_img");
    img.src =
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b52cad60636009.5a5478f0990fa.gif";
    container.append(img);
  } else {
    
    data.forEach((ele) => {
      console.log(ele);
      
      let div = document.createElement("div");
      div.addEventListener("click", function () {
        showFullRecipe(ele);
      });
      let img = document.createElement("img");
      img.src = ele.strMealThumb;
      let title = document.createElement("h3");
      title.innerText = ele.strMeal;
      div.append(img, title);
      container.append(div);
    });
    
  }
};

let showFullRecipe = (ele) => {
  container.innerHTML = "";
  let main = document.getElementById("showFullRecipe");
  main.innerHTML = "";

  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = ele.strMealThumb;
  let title = document.createElement("h3");
  title.innerText = ele.strMeal;
  let process = document.createElement("p");
  process.innerText = ele.strInstructions;

  div.append(img, title, process);
  main.append(div);
};

let homedata = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`;

  let res = await fetch(url);
  let data = await res.json();
  console.log("amolllll", data);
  return data.meals;
};

let homeRecipe= async () => {
 
  let data = await homedata();
  append(data);
};
homeRecipe();
