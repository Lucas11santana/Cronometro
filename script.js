const tempo = document.getElementById('timer');
const marca = document.getElementById('marcacoes');
let intervalID = 0;
let timer = 0;
let marks = [];


const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}


const addMark = (markIndex,markTime) => {
    marca.innerHTML += `<p>Marca ${markIndex}: ${formatTime(markTime)}</p>`
}
const markTime = () => {
 marks.push(timer);
 addMark(marks.length, timer);
}

const toggleTimer = () => {
    const button = document.getElementById('play');
    const action = button.getAttribute('action');

    clearInterval(intervalID);

    if (action === 'start' || action === 'continue') {
        intervalID = setInterval(() => {
            timer += 1;
            setTimer(timer);
        },10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    }else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    }
}

const resetTimer = () => {
    clearInterval(intervalID);
    timer = 0;
    setTimer(timer);
    marca.innerHTML = '';
    marks = [];
    document.getElementById('play').setAttribute('action', 'start');
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';
}

const setTimer = (time) => {
     tempo.innerText = formatTime(time);
}

document.getElementById('play').addEventListener('click', toggleTimer);
document.getElementById('mark').addEventListener('click', markTime);
document.getElementById('reset').addEventListener('click', resetTimer);