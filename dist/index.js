/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
//1 導航相關
//1.1 導航改變顔色
function navigation() {
  window.addEventListener('scroll', function () {
    var n = document.documentElement.scrollTop;
    var nav = document.querySelector('.nav_container');
    if (n > 50) {
      nav.style.backgroundColor = 'rgba(0,0,0, 0.8)';
    } else {
      nav.style.backgroundColor = 'rgba(0,0,0, .3)';
    }
  });
}
navigation();

//1.2 導航標志，點擊顯示導航欄目
function nav_show() {
  document.querySelector('.nav_RWDicon').addEventListener('click', function () {
    var navBar = document.querySelector('.nav_container');
    navBar.classList.toggle('navBar_show');
  });
}
nav_show();

//1.3 導航欄目跳轉對應位置
function lift() {
  var list = document.querySelector('.nav_item');
  list.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      var top = document.querySelector(".".concat(e.target.dataset.name, "_container")).offsetTop;
      document.documentElement.scrollTop = top + 10;
    }
  });
}
lift();

//1.4 導航反映所在位置
function lift_show() {
  window.addEventListener('scroll', function () {
    var old = document.querySelector('.nav_item .nav_active');
    var feather = document.querySelector('.fa-feather-pointed');
    if (old) old.classList.remove('nav_active');
    if (feather) feather.classList.remove('fa-feather-pointed');
    var n = document.documentElement.scrollTop;
    var aboutC = document.querySelector('.about_container');
    var skillsC = document.querySelector('.skills_container');
    var projectC = document.querySelector('.project_container');
    var feedbackC = document.querySelector('.feedback_container');
    if (n < aboutC.offsetTop) {
      document.querySelector('[data-name=home]').classList.add('nav_active');
      document.querySelector('[data-name=home] i').classList.add('fa-feather-pointed');
    } else if (n >= aboutC.offsetTop && n < skillsC.offsetTop) {
      document.querySelector('[data-name=about]').classList.add('nav_active');
      document.querySelector('[data-name=about] i').classList.add('fa-feather-pointed');
    } else if (n >= skillsC.offsetTop && n < projectC.offsetTop) {
      document.querySelector('[data-name=skills]').classList.add('nav_active');
      document.querySelector('[data-name=skills] i').classList.add('fa-feather-pointed');
    } else if (n >= projectC.offsetTop && n < feedbackC.offsetTop) {
      document.querySelector('[data-name=project]').classList.add('nav_active');
      document.querySelector('[data-name=project] i').classList.add('fa-feather-pointed');
    } else {
      document.querySelector('[data-name=contact]').classList.add('nav_active');
      document.querySelector('[data-name=contact] i').classList.add('fa-feather-pointed');
    }
  });
}
lift_show();

//2 輪播圖相關

// 2.1 輪播圖切換
function carousel() {
  var left = document.querySelector('.fa-angle-left');
  var right = document.querySelector('.fa-angle-right');
  var item = document.querySelector('.carousel_indicator');
  var i = 0;
  right.addEventListener('click', function () {
    i++;
    i = i > 2 ? i = 0 : i;
    toggle();
  });
  left.addEventListener('click', function () {
    i--;
    i = i < 0 ? i = 2 : i;
    toggle();
  });
  item.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      i = e.target.dataset.num - 1;
      toggle();
    }
  });

  // 輪播圖渲染函數
  function toggle() {
    document.querySelector('.carousel_indicator .carousel_active').classList.remove('carousel_active');
    document.querySelector(".carousel_indicator li:nth-child(".concat(i + 1, ")")).classList.add('carousel_active');
    document.querySelector('.carousel_item .carousel_show').classList.remove('carousel_show');
    document.querySelector(".carousel_item li:nth-child(".concat(i + 1, ")")).classList.add('carousel_show');
  }

  // 2.2 輪播圖自動播放
  var timerId = setInterval(function () {
    right.click();
  }, 7000);
  var carousel = document.querySelector('.carousel_container');
  carousel.addEventListener('mouseover', function () {
    clearInterval(timerId);
  });
  carousel.addEventListener('mouseleave', function () {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(function () {
      right.click();
    }, 7000);
  });
}
carousel();

// 3 個人統計相關

//節流函數
function throttle(fn, t) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        fn();
        timer = null;
      }, t);
    }
  };
}

//倒計時函數
function counter() {
  var number1 = document.querySelector('.count_body li:nth-child(1) .count_title');
  var number2 = document.querySelector('.count_body li:nth-child(2) .count_title');
  var number3 = document.querySelector('.count_body li:nth-child(3) .count_title');
  var number4 = document.querySelector('.count_body li:nth-child(4) .count_title');
  var i = 0;
  var timeCount = setInterval(function () {
    i++;
    number1.innerHTML = i;
    if (i > 299) {
      clearInterval(timeCount);
    }
  }, 1);
  var k = 0;
  var timeCount2 = setInterval(function () {
    k++;
    number2.innerHTML = k;
    if (k > 6) {
      clearInterval(timeCount2);
    }
  }, 100);
  var p = 0;
  var timeCount3 = setInterval(function () {
    p++;
    number3.innerHTML = p;
    if (p > 2) {
      clearInterval(timeCount3);
    }
  }, 300);
  var q = 0;
  var timeCount4 = setInterval(function () {
    q++;
    number4.innerHTML = q;
    if (q > 3) {
      clearInterval(timeCount4);
    }
  }, 300);
}

// 偵測倒計時的時機
function counting() {
  var homeC = document.querySelector('.home_container');
  var j = 0;
  window.addEventListener('scroll', throttle(function () {
    var n = document.documentElement.scrollTop;
    if (n > homeC.offsetHeight / 2 && n < homeC.offsetHeight + 100) {
      j++;
      if (j < 2) {
        window.setTimeout(function () {
          counter();
        }, 1);
      }
    }
  }, 500));
}
counting();

// 4. 個人簡介相關

// 4.1 内容切換
function about_show() {
  var list = document.querySelectorAll('.about_item li');
  list.forEach(function (li) {
    li.addEventListener('mouseenter', function () {
      var i = li.dataset.item;
      document.querySelector('.about_descp .about_descp_active').classList.remove('about_descp_active');
      document.querySelector(".about_descp li:nth-child(".concat(i, ")")).classList.add('about_descp_active');
      document.querySelector('.about_item .about_active').classList.remove('about_active');
      document.querySelector(".about_item li:nth-child(".concat(i, ")")).classList.add('about_active');
    });
  });
}
about_show();

// 5 意見反饋

//5.1 收集表單數據
function feedback() {
  var username = document.querySelector('[name=name]');
  var usermail = document.querySelector('[name=email]');
  var userphone = document.querySelector('[name=phone]');
  var useropinion = document.querySelector('[name=opinion]');
  username.addEventListener('change', verifyName);
  usermail.addEventListener('change', verifyMail);
  userphone.addEventListener('change', verifyPhone);
  function verifyName() {
    var nameMsg = username.nextElementSibling;
    var reg = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z.\s]{2,20})$/;
    if (!reg.test(username.value)) {
      nameMsg.innerHTML = '請輸入2-20個中英文字母';
      return false;
    }
    nameMsg.innerHTML = '';
    return true;
  }
  function verifyMail() {
    var mailMsg = usermail.nextElementSibling;
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!reg.test(usermail.value)) {
      mailMsg.innerHTML = '請輸入正確的電郵格式';
      return false;
    }
    mailMsg.innerHTML = '';
    return true;
  }
  function verifyPhone() {
    var phoneMsg = userphone.nextElementSibling;
    var reg = /^09[0-9]{8}$/;
    if (!reg.test(userphone.value)) {
      phoneMsg.innerHTML = '請輸入09開始的9位數字';
      return false;
    }
    phoneMsg.innerHTML = '';
    return true;
  }
  //5.2 反饋用戶
  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!verifyName()) e.preventDefault();
    if (!verifyMail()) e.preventDefault();
    if (!verifyPhone()) e.preventDefault();
    if (verifyName() && verifyMail() && verifyPhone()) {
      formPost();
    }
  });

  // 表單提交請求函數
  function formPost() {
    var container = document.querySelector('.message_container');
    var p = new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://portfolio-node-js-three.vercel.app/portfolio');
      xhr.addEventListener('loadend', function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.response));
        }
      });
      xhr.setRequestHeader('Content-Type', 'application/json');
      var obj = {
        name: username.value,
        mail: usermail.value,
        phone: userphone.value,
        opinion: useropinion.value
      };
      var userObj = JSON.stringify(obj);
      xhr.send(userObj);
    });
    p.then(function (result) {
      container.style.display = 'block';
      container.innerHTML = result.message;
      if (result.status >= 200 && result.status < 300) {
        container.style.backgroundColor = '#DFFFDF';
        container.style.borderColor = '#00DB00';
        container.style.color = '#007500';
      } else {
        container.style.backgroundColor = '#FFD2D2';
        container.style.borderColor = '#FF2D2D';
        container.style.color = '#CE0000';
      }
      container.addEventListener("animationend", function () {
        container.style.display = 'none';
        form.reset();
      });
    })["catch"](function (error) {
      console.dir(error);
    });
  }
}
feedback();

/******/ })()
;