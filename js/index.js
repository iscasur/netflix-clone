// Navbar
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

// Search input
const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('.search-box__icon');

searchIcon.addEventListener('click', activateSearch);

function activateSearch() {
  searchBox.classList.toggle('active');
}

// Video from hero
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const playButton = document.querySelector('button');

playButton.addEventListener('click', () => {
  player
    .requestFullscreen()
    .then(function () {})
    .catch(function (error) {});
});

// Carousel navigation
const rows = document.querySelector('.carousel-content');
const movies = document.querySelectorAll('.carousel__item');
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-btn');

const rowsPopular = document.querySelector('.populars');
const leftArrowPopular = document.querySelector('.left-arrow-popular');
const rigthArrowPopular = document.querySelector('.right-arrow-popular');

leftArrowPopular.addEventListener('click', () => {
  rowsPopular.scrollLeft -= rows.offsetWidth;
});

rigthArrowPopular.addEventListener('click', () => {
  rowsPopular.scrollLeft += rows.offsetWidth;
});

const rowsContinues = document.querySelector('.continues');
const leftArrowContinues = document.querySelector('.left-arrow-continues');
const rigthArrowContinues = document.querySelector('.right-arrow-continues');

leftArrowContinues.addEventListener('click', () => {
  rowsContinues.scrollLeft -= rows.offsetWidth;
});

rigthArrowContinues.addEventListener('click', () => {
  rowsContinues.scrollLeft += rows.offsetWidth;
});

const rowsTrendys = document.querySelector('.trendys');
const leftArrowTrendys = document.querySelector('.left-arrow-trendys');
const rigthArrowTrendys = document.querySelector('.right-arrow-trendys');

leftArrowTrendys.addEventListener('click', () => {
  rowsTrendys.scrollLeft -= rows.offsetWidth;
});

rigthArrowTrendys.addEventListener('click', () => {
  rowsTrendys.scrollLeft += rows.offsetWidth;
});

movies.forEach((movie) => {
  movie.addEventListener('mouseenter', (e) => {
    const element = e.currentTarget;
    setTimeout(() => {
      movies.forEach((movie) => movie.classList.remove('hover'));
      element.classList.add('hover');
    }, 300);
  });
  movie.addEventListener('click', () => {
    // const element = e.currentTarget;
    modal.classList.add('open-modal');
    console.log(modal);
  });
});

rows.addEventListener('mouseleave', () => {
  movies.forEach((movie) => movie.classList.remove('hover'));
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});

// TMDB
const API_KEY = '1d03f299b56b7d787bfc3da24f419706';
const baseURL = 'https://api.themoviedb.org/3/';
// const baseImageURL = 'http://image.tmdb.org/t/p/';

let configData = null;
let baseImageURL = null;

let getConfig = function () {
  let url = ''.concat(baseURL, 'configuration?api_key=', API_KEY);
  fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      baseImageURL = data.images.secure_base_url;
      configData = data.images;
      console.log(data);
      console.log('Config fetched');
      getTrendy();
    })
    .catch(function (err) {
      console.log(err);
    });
};

let getTrendy = function () {
  let url = ''.concat(baseURL, '/list/7?api_key=', API_KEY);
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      console.log(data.items);
    });
};

document.addEventListener('DOMContentLoaded', getConfig);
