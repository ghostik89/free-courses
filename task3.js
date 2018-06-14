var result = Number(process.argv[2]) + Number(process.argv[3]);
var hours, minutes;

if(result > 3600) {
    hours = Math.round(result / 3600);
    console.log("Часы " + hours + " ");
    result -= hours * 3600;
}
if (result > 60){
    minutes = Math.round(result / 60);
    result -= minutes * 60;
    console.log ("Минуты " + minutes + " ");
}
if (result > 0)
    console.log("Секунды " + result);