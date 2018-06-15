var result = Number(process.argv[2]) + Number(process.argv[3]);
var hours, minutes;

if(result > 3600) {
    hours = Math.round(result / 3600);
    result -= hours * 3600;
    if(hours == 1) console.log("1 час");
    else if (hours >= 2 && hours <= 4) console.log(hours + " часа ");
    else console.log(hours + " Часов ");
}
if (result > 60){
    minutes = Math.round(result / 60);
    result -= minutes * 60;
    if (minutes == 1) console.log("1 минута");
    else if (minutes >= 2 && minutes <= 4) console.log(result + " минуты ");
    else console.log (minutes + " Минут ");
}
if (result > 0) {
    if (result == 1) console.log("1 секунда");
    else if (result >= 2 && result < 5) console.log(result + " секунды");
    else console.log(result + " cекунд ");
}