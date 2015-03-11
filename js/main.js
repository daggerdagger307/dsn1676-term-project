
var navtop = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (navtop.getAttribute('data-state') == 'expanded') {
    navtop.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    navtop.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});