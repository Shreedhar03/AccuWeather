/*

clear-day
cloudy
rain

setInterval(() => {

const date = new Date();
const month_ = date.getMonth();
const day_ = date.getDay();
const date_ = date.getDate();
const hrs = date.getHours();
const mins = date.getMinutes();
const year = date.getFullYear();


// console.log("hrs = " , hrs)

const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

mins < 10 ? time.innerHTML = hrs + ":" + "0" + mins : time.innerHTML = hrs + ":" + mins;
day.innerHTML = Days[day_] + ", " + date_ + " " + Months[month_];

hrs >= 12 ? am.innerHTML = "PM" : am.innerHTML = "AM"

}, 1000)
*/


/* let border = document.querySelector('.in-circle')

    // if(border.style.borderBottom == "15px solid rgb(0, 4, 32)"){
    //     border.style.borderBottom = "15px solid white"
    // }
    // else{
    //     border.style.borderBottom = "15px solid rgb(0, 4, 32)"
    // }

    // let border1 = document.querySelector('.circle')

    // if(border1.style.borderBottom == "5px solid rgb(0, 4, 32)"){
    //     border1.style.borderBottom = "5px solid white"
    // }
    // else{
    //     border1.style.borderBottom = "5px solid rgb(0, 4, 32)"
    // }
    */