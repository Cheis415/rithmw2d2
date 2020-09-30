async function getGiphy(evt) {
  evt.preventDefault();
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${evt.target.giph}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log("got", response.data.data);
  console.log(Math.random() * 50)
  let randomIndex = Math.floor(Math.random() * response.data.data.length)
  let randoGiph = response.data.data[randomIndex];
  let image = new Image
  image.src = randoGiph.images.original.url;
  $('.giph-creator').append(image)
}

$(".remove").on("click",function remove(){
  $(".giph-creator").empty();
})
$("#search-form").on("submit", getGiphy)
