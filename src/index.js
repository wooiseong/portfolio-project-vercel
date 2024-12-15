
//1 導航相關
//1.1 導航改變顔色
function navigation(){
  window.addEventListener('scroll', () => {
    const n = document.documentElement.scrollTop
    const nav = document.querySelector('.nav_container')
    if (n > 50){
      nav.style.backgroundColor = 'rgba(0,0,0, 0.8)'
    } else {
       nav.style.backgroundColor = 'rgba(0,0,0, .3)'
    }
  })
}
navigation()

//1.2 導航標志，點擊顯示導航欄目
function nav_show(){
  document.querySelector('.nav_RWDicon').addEventListener('click', () => {
    const navBar = document.querySelector('.nav_container')
    navBar.classList.toggle('navBar_show')
  })
}
nav_show()

//1.3 導航欄目跳轉對應位置
function lift (){
  const list = document.querySelector('.nav_item')
  list.addEventListener('click', e => {
    if (e.target.tagName === 'A'){
      const top = document.querySelector(`.${e.target.dataset.name}_container`).offsetTop
      document.documentElement.scrollTop = top + 10  
    }
  })
  
}
lift()

//1.4 導航反映所在位置
function lift_show (){
  window.addEventListener('scroll', () => {
    const old = document.querySelector('.nav_item .nav_active')
    const feather = document.querySelector('.fa-feather-pointed')
    if (old) old.classList.remove('nav_active')

    if (feather) feather.classList.remove('fa-feather-pointed')
      const n = document.documentElement.scrollTop
      const aboutC = document.querySelector('.about_container')
      const skillsC = document.querySelector('.skills_container')
      const projectC = document.querySelector('.project_container')
      const feedbackC = document.querySelector('.feedback_container')

      if ( n < aboutC.offsetTop){
      document.querySelector('[data-name=home]').classList.add('nav_active')
      document.querySelector('[data-name=home] i').classList.add('fa-feather-pointed')
    } else if (n >= aboutC.offsetTop && n < skillsC.offsetTop){
      document.querySelector('[data-name=about]').classList.add('nav_active')
      document.querySelector('[data-name=about] i').classList.add('fa-feather-pointed')
    }  else if (n >= skillsC.offsetTop && n < projectC.offsetTop){
      document.querySelector('[data-name=skills]').classList.add('nav_active')
      document.querySelector('[data-name=skills] i').classList.add('fa-feather-pointed')
    } else if (n >= projectC.offsetTop && n < feedbackC.offsetTop){
      document.querySelector('[data-name=project]').classList.add('nav_active')
      document.querySelector('[data-name=project] i').classList.add('fa-feather-pointed')
    }  else {
      document.querySelector('[data-name=contact]').classList.add('nav_active')
      document.querySelector('[data-name=contact] i').classList.add('fa-feather-pointed')
    }
  })
}
lift_show()


//2 輪播圖相關

// 2.1 輪播圖切換
function carousel () {
  const left = document.querySelector('.fa-angle-left')
  const right = document.querySelector('.fa-angle-right')
  const item = document.querySelector('.carousel_indicator')

  let i = 0
  
  right.addEventListener('click', () => {
    i++
    i = i > 2 ? i = 0 : i
    toggle()
  } )

  left.addEventListener('click', () => {
    i--
    i = i < 0 ? i = 2 : i
    toggle()
  } )

  item.addEventListener('click' , e => {
    if (e.target.tagName === 'LI'){
      i = e.target.dataset.num - 1

      toggle()
    }
  })

// 輪播圖渲染函數
function toggle(){
  document.querySelector('.carousel_indicator .carousel_active').classList.remove('carousel_active')  
  document.querySelector(`.carousel_indicator li:nth-child(${ i + 1 })`).classList.add('carousel_active')
  document.querySelector('.carousel_item .carousel_show').classList.remove('carousel_show')
  document.querySelector(`.carousel_item li:nth-child(${ i + 1 })`).classList.add('carousel_show')
}

// 2.2 輪播圖自動播放
  let timerId = setInterval(function() {
    right.click()
  }, 7000)

  const carousel = document.querySelector('.carousel_container')
  carousel.addEventListener('mouseover', () => {
    clearInterval(timerId)
  })

  carousel.addEventListener('mouseleave', () => {
    if (timerId) clearInterval(timerId)

      timerId = setInterval(function() {
          right.click()
      },7000)
  })
}
carousel()
  

// 3 個人統計相關

//節流函數
function throttle (fn,t ){
  let timer = null
  return function(){
    if (!timer){
      timer = setTimeout(function(){
        fn()
        timer = null
      },t)
    }
  }
}

//倒計時函數
function counter (){
  const number1 = document.querySelector('.count_body li:nth-child(1) .count_title')
  const number2 =  document.querySelector('.count_body li:nth-child(2) .count_title')
  const number3 =  document.querySelector('.count_body li:nth-child(3) .count_title')
  const number4 =  document.querySelector('.count_body li:nth-child(4) .count_title')
  let i = 0
  const timeCount = setInterval( () => {
      i++
      number1.innerHTML = i
      if (i > 299) {
        clearInterval(timeCount)
      }
  }, 1 )
  let k = 0
  const timeCount2 = setInterval( () => {
    k++
    number2.innerHTML = k
    if(k >6){
      clearInterval(timeCount2)
    }
  },100)
  let p = 0
  const timeCount3 = setInterval( () => {
    p++
    number3.innerHTML = p
    if(p >2){
      clearInterval(timeCount3)
    }
  },300)
  let q = 0
  const timeCount4 = setInterval( () => {
    q++
    number4.innerHTML = q
    if(q >3){
      clearInterval(timeCount4)
    }
  },300)
}

// 偵測倒計時的時機
function counting () {
  const homeC = document.querySelector('.home_container')
  let j = 0
 window.addEventListener('scroll', throttle(
  () => {
    const n = document.documentElement.scrollTop
    if (n > homeC.offsetHeight / 2 && n < homeC.offsetHeight + 100 ){
      j++
      if (j < 2){
        window.setTimeout(() => {
          counter()
        }, 1 )
      }
    }
  }
  ,500)
)
}
counting()


// 4. 個人簡介相關

// 4.1 内容切換
function about_show () {
  const list = document.querySelectorAll('.about_item li')
  list.forEach( 
    (li) => {
      li.addEventListener('mouseenter', () => {
        let i = li.dataset.item
        document.querySelector('.about_descp .about_descp_active').classList.remove('about_descp_active')
        document.querySelector(`.about_descp li:nth-child(${ i })`).classList.add('about_descp_active')
        document.querySelector('.about_item .about_active').classList.remove('about_active')
        document.querySelector(`.about_item li:nth-child(${ i })`).classList.add('about_active')
      })
    }
  )
}

about_show()


// 5 意見反饋

//5.1 收集表單數據
function feedback() {
  const username = document.querySelector('[name=name]')
  const  usermail = document.querySelector('[name=email]')
  const userphone = document.querySelector('[name=phone]')
  const useropinion = document.querySelector('[name=opinion]')

  username.addEventListener('change', verifyName )
  usermail.addEventListener('change', verifyMail )
  userphone.addEventListener('change', verifyPhone )

  function verifyName() {
    const nameMsg = username.nextElementSibling
    const reg = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z.\s]{2,20})$/
    
    if (!reg.test(username.value)) {
      nameMsg.innerHTML = '請輸入2-20個中英文字母'
      return false
    }
    nameMsg.innerHTML = ''
    return true
  }

  function verifyMail() {
    const mailMsg = usermail.nextElementSibling
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!reg.test(usermail.value)) {
      mailMsg.innerHTML = '請輸入正確的電郵格式'
      return false
    }
    mailMsg.innerHTML = ''
    return true
  }

  function verifyPhone() {
    const phoneMsg = userphone.nextElementSibling
    const reg = /^09[0-9]{8}$/
    
    if (!reg.test(userphone.value)) {
      phoneMsg.innerHTML = '請輸入09開始的9位數字'
      return false
    }
    phoneMsg.innerHTML = ''
    return true
  }
  //5.2 反饋用戶
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!verifyName()) e.preventDefault()
  if (!verifyMail()) e.preventDefault()
  if (!verifyPhone()) e.preventDefault()

  if (verifyName() && verifyMail() && verifyPhone()) {
    formPost()
  }
  })

// 表單提交請求函數
  function formPost() {
  const container = document.querySelector('.message_container')
  const p = new Promise(((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://portfolio-node-js-three.vercel.app/portfolio')
    xhr.addEventListener('loadend', () => {
      if (xhr.status >=200 && xhr.status < 300 ){
        resolve((JSON.parse(xhr.response)))
      } else {
        reject(new Error(xhr.response))
      }
    })

    xhr.setRequestHeader('Content-Type', 'application/json')

    const obj = {
      name: username.value,
      mail: usermail.value,
      phone: userphone.value,
      opinion: useropinion.value
    }
    const userObj = JSON.stringify(obj)
    xhr.send(userObj)

  }))

  p.then(result => {
    container.style.display = 'block'
    container.innerHTML = result.message

    if (result.status>=200 && result.status < 300 ) {
      container.style.backgroundColor = '#DFFFDF'
      container.style.borderColor = '#00DB00'
      container.style.color = '#007500'
    } else {
      container.style.backgroundColor = '#FFD2D2'
      container.style.borderColor = '#FF2D2D'
      container.style.color = '#CE0000'
    }

    container.addEventListener("animationend", () => {
      container.style.display = 'none'
      form.reset()
    });
  }).catch(error => {
    console.dir(error)
  })
  }
}

feedback()

import './media/index.css'