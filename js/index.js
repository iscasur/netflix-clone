const navbar = document.getElementById('navbar');
const navbar_height = navbar.offsetHeight;

window.addEventListener('scroll', function () {
  on_scroll = window.scrollY;

  if (on_scroll > navbar_height) {
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }
});

const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('.search-box__icon');

searchIcon.addEventListener('click', activateSearch);

function activateSearch() {
  searchBox.classList.toggle('active');
}

const rows = document.querySelector('.carrousel-content');
const movies = document.querySelectorAll('.carrousel__item');

const leftArrow = document.getElementById('left-arrow');
const rigthArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
  rows.scrollLeft -= rows.offsetWidth;
});

rigthArrow.addEventListener('click', () => {
  rows.scrollLeft += rows.offsetWidth;
});

const accessKey = aadSocsmWTjPn6vTCVMHHE5KNYptnq0RwPqhlTFols8;
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query) {
  let response = await fetch(
    endPoint + '?query=' + query + '&client_id=' + accessKey
  );
  let jsonResponse = await response.json();
  let imagesList = await jsonResponse.results;
  console.log(imagesList);
}
