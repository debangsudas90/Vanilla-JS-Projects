let am_pm = "AM";

setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrotation = 30*htime+mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    if(htime>12){
        htime -= 12;
        am_pm = 'PM';
    }
    if(htime == 0){
        htime = 12;
        am_pm = 'AM';
    }
    
    if(htime<10){
        htime = '0'+htime;
    }
    if(mtime<10){
        mtime = '0'+mtime;
    }
    if(stime<10){
        stime = '0'+stime;
    }

    let currentTime = htime + ':' + mtime + ':' + stime + ' ' + am_pm;
    document.querySelector('.clockContainer').innerHTML = currentTime;

},1000);
