

// create categries
const loadCategoies = async() => {

  const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      const data = await res.json()
      displeyCategoies(data.categories)

      // console.log(data.categories)
      // .catch((error) => console.log(error));
}

// "category": "Music",
// "category_id": "1001"

// create displey categries
const displeyCategoies = (categories) => {

  const categoriesContainer = document.getElementById("categories");

  categories.forEach( item => {
    //Create Button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoriesContainer.append(button);

    // console.log(item)
    // console.log(button);
  });

};


loadCategoies();