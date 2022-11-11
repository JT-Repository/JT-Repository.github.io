// Countdown

const countDown = document.querySelector(".countdown");
const countDownDate = new Date("Nov 20, 2022 16:00:00 GMT").getTime();
const countDownRefresh = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countDown.innerHTML = "Only <span class='days'>" + days + " days</span> <span class='hours'>" + hours + "h</span> <span class='minutes'>" + minutes + "m</span> <span class='seconds'>" + seconds + "s</span> until kick off!";
    if (distance < 0) {
        clearInterval(countDownRefresh);
        countDown.innerHTML = "Come on England!!!";
        //document.querySelector("countdown").style.display = "none";
    }
}, 1000);