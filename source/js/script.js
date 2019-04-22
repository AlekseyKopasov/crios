const searchElement = document.querySelector('.main-header__search');
const searchInputElement = searchElement.querySelector('.main-header__search-input');

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const closeSearch = () => {
  searchInputElement.classList.remove('main-header__search-input--active');
};

const onClickOpen = () => {
  searchInputElement.classList.add('main-header__search-input--active');
};

const onKeydownClose = (event) => {
  if (event.keyCode === ESC_KEYCODE || event.keyCode === ENTER_KEYCODE) {
    closeSearch();
  }
};

searchElement.removeEventListener('click', onClickOpen);
searchElement.removeEventListener('keydown', onKeydownClose);

if (searchElement) {
  searchElement.addEventListener('click', onClickOpen);
  searchElement.addEventListener('keydown', onKeydownClose);
}
