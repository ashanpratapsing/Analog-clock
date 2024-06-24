const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
//using simple way to calculate;
// setInterval(() => {
//   const now = new Date();
//   const sec = now.getSeconds();
//   const secDeg = sec * 6;
//   sc.style.transform = `rotate(${secDeg}deg)`;
//   const min = now.getMinutes();
//   const minDeg = min * 6;
//   mn.style.transform = `rotate(${minDeg}deg)`;
//   const hr = now.getHours();
//   const hrDeg = hr * 30;
//   hr.style.transform = `rotate(${hrDeg}deg)`;
// });
setInterval(() => {
  let day = new Date();
  let ms = day.getMilliseconds() * deg;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg + ms / 1000;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
