
var navtop = document.querySelector('.nav-top');
var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $fade =$('.fade');
var $rtt =$('.rtt');

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

$('.button-grid').on('click', 'a', function(e) {
    e.preventDefault();
    console.log('clicked link');
    navtop.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
});

$thumbs.on('click', 'a', function (e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lbImg.attr('src', big);
    $lb.attr('data-state', 'visible');
});

$btnClose.on('click', function () {
    $lb.attr('data-state', 'hidden');
});

$('.smooth').localScroll({
    target:'body'
//            duration: 1200       
});

$('.rtt').localScroll({
    target:'body'
//            duration: 1200       
});

$fade.waypoint(function (direction) {
    console.log('check')
    if (direction == 'down') {
    $fade.addClass('js-fade');
    } else {
    $fade.removeClass('js-fade');
    }
}, { offset: '50%' });

$rtt.waypoint(function (direction) {
    console.log('check')
    if (direction == 'down') {
    $rtt.addClass('js-rtt');
    } else {
    $rtt.removeClass('js-rtt');
    }
}, { offset: '50%' });