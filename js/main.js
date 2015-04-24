
var navtop = document.querySelector('.nav-top');
var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $thumbsV = $('.thumbnails-2');
var $lbImgV = $('.lightbox-img-2');
var $lbV = $('.lightbox-2');
var $btnClose = $('.btn-close');
var $btnCloseV = $('.btn-close-2');
var $fade = $('.fade');
var $rtt = $('.rtt');
var $cross = $('.cross');

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

$thumbsV.on('click', 'a', function (e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lbImgV.attr('src', big);
    $lbV.attr('data-state', 'visible');
});

$btnClose.on('click', function () {
    $lb.attr('data-state', 'hidden');
});

$btnCloseV.on('click', function () {
    $lbV.attr('data-state', 'hidden');
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

$cross.waypoint(function (direction) {
    console.log('check')
    if (direction == 'down') {
    $cross.addClass('js-cross');
    } else {
    $cross.removeClass('js-cross');
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