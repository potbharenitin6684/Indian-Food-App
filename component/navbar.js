let navbar = () => {
  return `<div id="logo"><a href="index.html">Indian Food</a><span>The Perfect Food Recipes</span></div>
    <div id="search_div">
      <!--   oninput="debounce(main, 1000) " -->
      <input
        type="text"
        id="search"
        oninput="debounce(recipe, 1000)"
        placeholder="Search Your Favriote Reciepe"
      />
    </div>
    <div id="btn_div">
    <a href="./recipe_of_day.html">Recipe Of the Day</a></div>
    <div id="random"><a href="./randomRec.html">Random Recipe</a></div>`;
};
export default navbar;
