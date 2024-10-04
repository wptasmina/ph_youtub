
// create categories
const loadCategoies = async() => {

  const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      const data = await res.json();
      displeyCategoies(data.categories);
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
  });
};

// create card display Video object
const cardDemo = {
      "category_id": "1001",
      "video_id": "aaaa",
      "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
      "title": "Shape of You",
      "authors": [
        {
          "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
          "profile_name": "Olivia Mitchell",
          "verified": ""
        }
      ],
      "others": {
        "views": "100K",
        "posted_date": "16278"
      },
      "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
    }
    // create categoriesVideo
    const loadvideos = async() => {
      const res = await fetch`https://openapi.programming-hero.com/api/phero-tube/videos`
      const data = await res.json()
      displayVideos(data.videos);
      
    }
    
    // create displayVideos
    const displayVideos = (videos) => {
      // const {authors,others,description} = cardDemo
      const videosContainer = document.getElementById("videos");
      videos.forEach( video => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
card.innerHTML = `
  <div class="h-[200px]">
    <img class="w-full h-full object-cover" src= ${video.thumbnail} />
  </div>

  <div class="px-0 py-2 flex gap-3">
      <div class=" ">
        <img class= "w-10 h-10 object-cover rounded-full" src= ${video.authors[0].profile_picture} />
      </div>

    <div>
        <h2 class="font-bold">${video.title}</h2>
     
    
      <div class="flex items-center gap-2">
          <p class="text-gray-400"> ${video.authors[0].profile_name}</p>
          <img class= "w-6" src= "https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" /> 
      </div>
      <p></p>

    </div>
  </div>
`;
videosContainer.append(card);
// console.log(video)
})

}


loadCategoies();
loadvideos();