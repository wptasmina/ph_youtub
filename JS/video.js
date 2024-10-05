
// create categories
const loadCategoies = async() => {

  const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      const data = await res.json();
      displeyCategoies(data.categories);
};

// get Button Move
const getButtonMove = async(id) =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    )
    const data = await res.json();
    displayVideos(data.category);
};

// create displey categries
const displeyCategoies = (categories) => {

  const categoriesContainer = document.getElementById("categories");

  categories.forEach( item => {
    const buttonContainer = document.createElement("div")
    buttonContainer.innerHTML = `
      <button onclick= "getButtonMove(${item.category_id})" class= "btn">
        ${item.category}
      </button>
    `;
 
    categoriesContainer.append(buttonContainer);
    // const button = document.createElement("button");
    // button.classList = "btn";
    // button.innerText = item.category;
    // categoriesContainer.append(button);
  });
};

// create categoriesVideo
const loadvideos = async() => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  const data = await res.json()
  displayVideos(data.videos);
      
}
    
    // create displayVideos
const displayVideos = (videos) => {
 // const {authors,others,description} = cardDemo
const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = "";

      if (videos.length == 0) {
        videosContainer.classList.remove("grid");
        videosContainer.innerHTML = `
        <div class= "min-h-[400px] w-full flex flex-col justify-center items-center">
           <img src="./img/Icon.png" alt="icon">
            <h2 class="text-xl text-center text-red-500 font-bold pt-4">Oops!! Sorry, There is no content here</h2>
        </div>
        `;
        return;
      } else {
        videosContainer.classList.add("grid");
      }

  videos.forEach( video => {
  const card = document.createElement("div");
  card.classList = "card card-compact";
  card.innerHTML = `
   <figure class="h-[200px] relative">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail} />
      ${
        video.others.posted_date?.length == 0
          ? "": `<span class="absolute bg-black text-gray-400 py-1 px-2 right-2 bottom-2 rounded">
        ${getTime(video.others.posted_date)}
      </span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <img class="w-10 h-10 rounded-full object-cover" src=${
      video.authors[0].profile_picture
    } />

    <div>
        <h2 class="font-bold">${video.title}</h2>

        <div class ="flex gap-4">
            <p class ="text-gray-500">${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified == true
                ? ` <img class="w-6 h-6 rounded-full object-cover" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>`
                : ""
            }
        </div>
        <p class ="text-gray-500 pb-3">${video.others.views}</p>
    </div>
  </div>
        `;
videosContainer.append(card);
});
};

loadCategoies();
loadvideos();

//get Time functoin
const getTime = (time) =>{
    const hours = parseInt(time / 8600);
    let second = parseInt(time % 4600);
    let minites = parseInt(second / 60);
    second = parseInt(second % 60);

    return `0${hours}:${minites}:${second}`;
}