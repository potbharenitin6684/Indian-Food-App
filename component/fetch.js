let getdata = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

  let res = await fetch(url);
  let data = await res.json();
  // console.log("xx", data);
  return data.meals;
};

let append = (data, container) => {
  data.forEach((ele) => {
    console.log(ele);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.strMealThumb;
    let title = document.createElement("h3");
    title.innerText = ele.strMeal;
    let process = document.createElement("p");
    process.innerText = ele.strInstructions;

    div.append(img, title, process);
    container.append(div);
  });
};

export { getdata,append};
