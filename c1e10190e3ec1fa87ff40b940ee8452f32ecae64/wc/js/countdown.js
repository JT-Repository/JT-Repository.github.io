// Countdown timer
var countDownDate = new Date("Nov 20, 2022 16:00:00 GMT").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "Only <span class='days'>" + days + " days</span> <span class='hours'>" + hours + "h</span> <span class='minutes'>" + minutes + "m</span> <span class='seconds'>" + seconds + "s</span> until kick off!";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Come on England!!!";
        //document.getElementById("countdown").style.display = "none";
    }
}, 1000);