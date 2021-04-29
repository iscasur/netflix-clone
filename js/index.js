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

const searchBox = document.getElementsByClassName('search-box')[0];
const searchIcon = document.getElementsByClassName('search-box__icon')[0];

searchIcon.addEventListener('click', activateSearch);

function activateSearch() {
  searchBox.classList.toggle('active');
}
