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

const iframe = document.querySelector('iframe')
const player = new Vimeo.Player(iframe);

const playButton = document.querySelector('button')

playButton.addEventListener('click', () => {
  player.requestFullscreen().then(function() {
  }).catch(function(error) {

  })
});

const rows = document.querySelector('.carrousel-content');
const movies = document.querySelectorAll('.carrousel__item');

const leftArrow = document.querySelectorAll('.left-arrow');
const rigthArrow = document.querySelectorAll('.right-arrow');

[...leftArrow].map(item => {
  item.addEventListener('click', () => {
    rows.scrollLeft -= rows.offsetWidth;
  })
});

[...rigthArrow].map(item => {
  item.addEventListener('click', () => {
    rows.scrollLeft += rows.offsetWidth;
  })
});

/*
leftArrow.addEventListener('click', () => {
  rows.scrollLeft -= rows.offsetWidth;
});

rigthArrow.addEventListener('click', () => {
  rows.scrollLeft += rows.offsetWidth;
});
*/

movies.forEach((movie) => {
  movie.addEventListener('mouseenter', (e) => {
    const element = e.currentTarget;
    setTimeout(() => {
      movies.forEach((movie) => movie.classList.remove('hover'));
      element.classList.add('hover');
    }, 300);
  });
});

rows.addEventListener('mouseleave', () => {
  movies.forEach((movie) => movie.classList.remove('hover'));
});
