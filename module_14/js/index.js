const timertext = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let clocktimer;

class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }

  start () {  
    clocktimer = setInterval("startTIME()", 9);
    Timer.startTime = timertext.textContent;
  }
  
  stop () {
       clearInterval(clocktimer);
     Timer.stopTime = timertext.textContent;
    console.log(Timer.startTime)
      console.log(Timer.stopTime)
    Timer.interval =  parseInt(Timer.stopTime) - parseInt(Timer.startTime);
    console.log(Timer.interval);
  } 
}

let firstExample = new Timer(14, 20, 6);
console.log(firstExample);

let secondExample = new Timer(1556, 5959, 4844);
console.log(secondExample);

const counter = function () {
  let count = 0;
      return function () {
         count++
  }
}; 
const visualTimer = counter();

function startTIME() {
  let d = setInterval(visualTimer, 1);
  let t =d;
  let ms = t%1000;
  ms=Math.floor(ms);
  t = Math.floor (t/1000);
  let s = t%60;
  t = Math.floor (t/60);
  let m = t%60;
  t = Math.floor (t/60);
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  timertext.textContent =  m + ':' + s + ':' + ms; 
  return d
 }
function findTIME() {
   clocktimer = setInterval("startTIME()", 9);
} 


start.addEventListener('click', Timer.prototype.start)

function create () {
  let stopwatch = new Timer(Timer.startTime, Timer.stopTime, Timer.interval);
     console.log(stopwatch)
}

stop.addEventListener('click', Timer.prototype.stop)
stop.addEventListener('click', create)