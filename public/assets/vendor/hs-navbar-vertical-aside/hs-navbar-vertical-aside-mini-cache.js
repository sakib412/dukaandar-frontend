const body = document.body,
  isMini = window.localStorage.getItem('hs-navbar-vertical-aside-mini') === null ? false : window.localStorage.getItem('hs-navbar-vertical-aside-mini');

if (isMini) {
  body.classList.add('navbar-vertical-aside-mini-mode')
}