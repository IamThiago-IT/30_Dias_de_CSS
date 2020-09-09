const switchTumblerHandler = () => {
  const wrapper = document.querySelector('.tumbler__wrapper')
  
  wrapper.addEventListener('click', () => {
    toggleNightMode()
  })
}                          

const toggleNightMode = () => {
  document.body.classList.toggle('body--night-mode')
  document.querySelector('.tumbler').classList.toggle('tumbler--night-mode')
  document.querySelectorAll('.post').forEach(post => {
    post.classList.toggle('post--night-mode')
  })
}

switchTumblerHandler()
