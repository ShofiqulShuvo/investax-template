const msgs = document.querySelectorAll('.help')

let n = 0

setInterval(function () {
  if(n==msgs.length) n=0

  // msgs.forEach(el => {
  //   el.classList.remove('msg-visible')
  // })
  // msgs.forEach(el => {
  //   el.classList.add('msg-invisible')
  // })

  // msgs[n].classList.add('msg-visible')
  
  
  msgs.forEach( el => {
    el.classList.remove('msg-center')
  })
  msgs[n].classList.add('msg-center')

  // setTimeout(() => {
  //  msgs[n-1].classList.add(msg-right)
  // }, 2200);

  // if(n==0)
  // {
  //   msgs[msgs.length-1].classList.add('msg-right')
    
  //   setTimeout(() => {
  //     msgs.forEach(el => {
  //       el.classList.add('msg-left')
  //     })
  //     msgs[msgs.length-1].classList.remove('msg-right')
  //   }, 1500)
  // }
  // else
  // {
  //   msgs[n-1].classList.add('msg-right')
    
  //   setTimeout(() => {
  //     msgs.forEach(el => {
  //       el.classList.add('msg-left')
  //     })
  //     msgs[n-1].classList.remove('msg-right')
  //   }, 1500)
  // }
    

  n++
},4500)