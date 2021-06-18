"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cb = function cb(el, inview) {
    if (inview) {
      var ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  var so = new ScrollObserver('.tween-animate-title', cb);

  var _inviewAnimation = function _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  var so2 = new ScrollObserver('.appear', _inviewAnimation);
  var header = document.querySelector('.header');

  var _navAnimation = function _navAnimation(el, inview) {
    if (inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  };

  var so3 = new ScrollObserver('.nav-trigger', _navAnimation, {
    once: false
  });
  new MobileMenu();
});
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
$(function () {
  var ua = navigator.userAgent.toLowerCase(); // alert(ua);

  if (ua.indexOf('iphone') > -1 || ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1) {
    // スマートフォン
    // alert('スマートフォン');
    $('body').addClass('is-ios');
  } else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
    // タブレット
    // alert('タブレット');
    $('body').addClass('is-ios');
  } else {
    // PC
    // alert('PC');
    $('body').removeClass('is-ios');
  }
});
//# sourceMappingURL=main.js.map
