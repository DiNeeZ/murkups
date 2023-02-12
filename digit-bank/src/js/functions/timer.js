(function () {
  if (document.querySelector(".timer")) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function getDistanceFromNow(start) {
      const now = new Date().getTime();
      const distance = now - start;

      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    function initTimer(start) {
      const { days, hours, minutes, seconds } = getDistanceFromNow(start );
      daysEl.innerText = days;
      hoursEl.innerText = hours;
      minutesEl.innerText = minutes;
      secondsEl.innerText = seconds;
    }

    const startTime = new Date("January 17, 2023 14:50  :00");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    initTimer(startTime)

    setInterval(() => {
      const { days, hours, minutes, seconds } = getDistanceFromNow(startTime);

      if (daysEl.innerText != days) daysEl.innerText = days;
      if (hoursEl.innerText != hours) hoursEl.innerText = hours;
      if (minutesEl.innerText != minutes) minutesEl.innerText = minutes;
      if (secondsEl.innerText != seconds) secondsEl.innerText = seconds;
    }, 1000);
  }
})();
