let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
// s.style.transform = "rotate("+ 50 +"deg)"
function time() {
  // 获取最新时间
  let time = new Date()
  // 毫秒 时 分 秒
  let newHs = time.getMilliseconds()
  // 加上时间后面的小数点，实现缓动效果
  let newS = time.getSeconds() + newHs/1000
  let newM = time.getMinutes() + newS/60
  let newH = time.getHours() + newM/60
  // 旋转角度美肆无忌惮肆显示显 
  h.style.transform = 'rotate('+ newH*30 +'deg)'
  m.style.transform = 'rotate('+ newM*6 +'deg)'
  s.style.transform = 'rotate('+ newS*6 +'deg)'
}
time()

setInterval(time ,20) 