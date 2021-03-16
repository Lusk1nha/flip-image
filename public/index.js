const btnLeft = document.querySelector('.btn-reverse.left')
const btnRight = document.querySelector('.btn-reverse.right')

const imgContainer = document.querySelector('.image-container')

let imgPosition = [1, 1]

btnLeft.addEventListener('click', () => {

  if ( imgPosition[0] == 1 && imgPosition[1] == 1 ) {
    imgPosition[0] = 1
    imgPosition[1] = -1

  } else if ( imgPosition[0] == 1 && imgPosition[1] == -1 ) {
    imgPosition[0] = -1
    imgPosition[1] = -1
  
  } else if ( imgPosition[0] == -1 && imgPosition[1] == -1 ) {
    imgPosition[0] = -1
    imgPosition[1] = 1

  } else if ( imgPosition[0] == -1 && imgPosition[1] == 1 ) {
    imgPosition[0] = 1
    imgPosition[1] = 1

  }

  return imgContainer.style.transform = `scale(${imgPosition[0]}, ${imgPosition[1]})`
})

btnRight.addEventListener('click', () => {

  if ( imgPosition[0] == 1 && imgPosition[1] == 1 ) {
  imgPosition[0] = -1
  imgPosition[1] = 1

  } else if ( imgPosition[0] == -1 && imgPosition[1] == 1 ) {
    imgPosition[0] = -1
    imgPosition[1] = -1
  
  } else if ( imgPosition[0] == -1 && imgPosition[1] == -1 ) {
    imgPosition[0] = 1
    imgPosition[1] = -1

  } else {
    imgPosition[0] = 1
    imgPosition[1] = 1

  }
  
  return imgContainer.style.transform = `scale(${imgPosition[0]}, ${imgPosition[1]})`
})
