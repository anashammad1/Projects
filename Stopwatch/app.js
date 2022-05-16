window.onload = function() {
    var seconds = 00;
    var minutes = 00;
    var changeSeconds = document.getElementById('seconds');
    var changeMinutes = document.getElementById('minutes');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var resetButton = document.getElementById('resetButton');
    var Interval;

    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startSeconds, 1000);
    }
    stopButton.onclick = function() {
        clearInterval(Interval);
    }
    resetButton.onclick = function() {
        clearInterval(Interval);
        seconds = '00';
        minutes = '00';
        changeSeconds.innerHTML = seconds;
        changeMinutes.innerHTML = minutes;
    }

    function startSeconds () {
        seconds++;
        if (seconds <= 9){
            changeSeconds.innerHTML = '0' + seconds;
        } else if (seconds > 9) {
            changeSeconds.innerHTML = seconds;
        } if (seconds > 59){
            seconds = '00';
            minutes++;
            changeSeconds.innerHTML = '0' + 0;
            changeMinutes.innerHTML = '0' + minutes;
        } if (minutes > 9) {
            changeMinutes.innerHTML = minutes;
        }
    }

}