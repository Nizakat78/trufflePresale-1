document.addEventListener('DOMContentLoaded', function () {
    // Timer Logic
    function startTimer(endTime) {
      const timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = endTime - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  
        if (distance < 0) {
          clearInterval(timerInterval);
          document.querySelector('.timer-section').textContent = '00:00:00:00';
        }
      }, 1000);
    }
  
    // Set the countdown time (replace with your desired end time)
    const countdownEndTime = new Date("Sept 31, 2024 00:00:00").getTime();
    startTimer(countdownEndTime);
});