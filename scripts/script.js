// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// let box = document.querySelectorAll('.apoint')

// console.log(box)

let box = document.querySelector('.apoint'),
    open = document.querySelector('.polza__btn'),
    close = document.querySelector('.apoint__btn')

open.addEventListener('click', () => {
    console.log('open')
  box.style.height = `${ box.scrollHeight }px`
})

close.addEventListener('click', () => {
    console.log('open')
  box.style.height = `${ box.scrollHeight }px`
  window.getComputedStyle(box, null).getPropertyValue('height')
  box.style.height = '0'
})

box.addEventListener('transitionend', () => {
  if (box.style.height !== '0px') {
      box.style.height = 'auto'
  }
})