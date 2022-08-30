function countDown(){
    let dateNow = new Date().getTime();
    let countDownDate =new Date("Thu Aug 25 2023 14:31:17").getTime();
    let gap = countDownDate - dateNow;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;


    let textDay = Math.floor((gap /day));
    let textHour = Math.floor((gap % day) /hour);
    let textMinute = Math.floor((gap % hour) /minute);
    let textsecond = Math.floor((gap % minute) /second);



    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    




    if(textsecond <10)
    {
        document.querySelector(".second").innerHTML = `0${textsecond}`;
        

    }else{
        document.querySelector(".second").innerHTML = `${textsecond}`;
    }


    if(gap <0){
        document.write('Helo from ${dateNow}');
        clearInterval(count);

    }

}

let count = setInterval(countDown,1000);