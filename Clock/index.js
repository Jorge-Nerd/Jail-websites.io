const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  /*if (h<10){
        h="0"+h;
    } else{
        h=h;
    }*/
  h = h < 10 ? "0" + h : h; // sames as the if statement in top
  m = m < 10 ? "0" + m : m; // sames as the if statement in top
  s = s < 10 ? "0" + s : s; // sames as the if statement in top

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
