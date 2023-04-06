let box1 = document.querySelector('.hide-block'),
    box2 = document.querySelector('.hide-block-2'),
    box3 = document.querySelector('.hide-block-3'),
    box4 = document.querySelector('.hide-block-4'),
    btn1 = document.querySelector('.btns__link--pr1'),
    btn2 = document.querySelector('.btns__link--pr2'),
    btn3 = document.querySelector('.btns__link--pr3'),
    btn4 = document.querySelector('.btns__link--pr4')


btn1.addEventListener('click', () => {
  btn1.classList.add('visuallyhidden') 
  btn1.addEventListener('transitionend', (e) => {
    btn1.classList.add('hidden')
    box1.classList.remove('hidden')
    setTimeout(()=> {
      box1.classList.remove('visuallyhidden')
    }, 20)
  }, {
    capture: false,
    once: true,
    passive: false
  })
})

btn2.addEventListener('click', () => {
  btn2.classList.add('visuallyhidden') 
  btn2.addEventListener('transitionend', (e) => {
    btn2.classList.add('hidden')
    box2.classList.remove('hidden')
    setTimeout(()=> {
      box2.classList.remove('visuallyhidden')
    }, 20)
  }, {
    capture: false,
    once: true,
    passive: false
  })
})

btn3.addEventListener('click', () => {
  btn3.classList.add('visuallyhidden') 
  btn3.addEventListener('transitionend', (e) => {
    btn3.classList.add('hidden')
    box3.classList.remove('hidden')
    setTimeout(()=> {
      box3.classList.remove('visuallyhidden')
    }, 20)
  }, {
    capture: false,
    once: true,
    passive: false
  })
})

btn4.addEventListener('click', () => {
  btn4.classList.add('visuallyhidden') 
  btn4.addEventListener('transitionend', (e) => {
    btn4.classList.add('hidden')
    box4.classList.remove('hidden')
    setTimeout(()=> {
      box4.classList.remove('visuallyhidden')
    }, 20)
  }, {
    capture: false,
    once: true,
    passive: false
  })
})