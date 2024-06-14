const startStop = document.querySelector("#startStopBtn");
const reset = document.querySelector("#resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null
let timerStatus = 'stopped'

function StopWatch(){
    seconds ++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours ++;
        }
    }

    if(seconds < 10){
        leadingSecond = '0' + seconds.toString();

    }else{
        leadingSecond = seconds
    }

    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString();
    }else{
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours = '0' + hours
    }else{
        leadingHours = hours
    }

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSecond
};



startStop.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(StopWatch, 1);
        document.getElementById('startStopBtn').innerHTML = `<i class = 'fa-solid fa-pause' id ='pause'></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = 'fa-solid fa-play' id ='play'></i>`;
        timerStatus = 'stopped';
    }
});

reset.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#timer').innerHTML = '00:00:00';
})
