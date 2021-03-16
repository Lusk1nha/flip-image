const btnLeft = document.querySelector('.btn-reverse.left')
const btnRight = document.querySelector('.btn-reverse.right')

const imgContainer = document.querySelector('.image-container')

let imgPosition = [1, 1]

btnLeft.addEventListener('click', () => {
  console.log(imgPosition[0])

})

btnRight.addEventListener('click', () => {
  console.log('right')

})
