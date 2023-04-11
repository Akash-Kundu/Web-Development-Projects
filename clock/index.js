const hour1 = document.querySelector(".hour")
const minutes1 = document.querySelector(".minutes")
const seconds1 = document.querySelector(".seconds")

function updateClock() {
    const currentDate = new Date();
    
    
    const hour = currentDate.getHours();    
    const minute = currentDate.getMinutes();    
    const second = currentDate.getSeconds();  
    
    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    hour1.style.transform = `rotate(${hourDeg}deg)`;
    minutes1.style.transform = `rotate(${minuteDeg}deg)`;
    seconds1.style.transform = `rotate(${secondDeg}deg)`;

}

setInterval(updateClock, 1000);

