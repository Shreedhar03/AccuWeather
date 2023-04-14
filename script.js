let darkMode = true

let time = document.querySelector('#time')
let day = document.querySelector('#day-date')
let am = document.querySelector('#unit')
let search = document.querySelector("#search")
let icon = document.querySelector('#icon')


search.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        API();
        showTime();
    }
});


let ham = document.querySelector('#ham')
let ham1 = document.querySelector('#ham1')

const upArrow = () => {

    if (ham.classList.contains('bxs-down-arrow')) {
        ham.classList.remove('bxs-down-arrow')
        ham.classList.add('bxs-up-arrow')
    }
    else {

        ham.classList.remove('bxs-up-arrow')
        ham.classList.add('bxs-down-arrow')
    }
}

const downArrow = () => {

    if (ham1.classList.contains('bxs-down-arrow')) {
        ham1.classList.remove('bxs-down-arrow')
        ham1.classList.add('bxs-up-arrow')
    }
    else {

        ham1.classList.remove('bxs-up-arrow')
        ham1.classList.add('bxs-down-arrow')
    }
}

const show = () => {

    document.querySelector('.overview').classList.toggle('hide')
}
const show1 = () => {

    document.querySelector('.day-7').classList.toggle('hide')
}

let temperature = document.querySelector('#temperature')


let var_temperature = document.querySelector('#var_temperature')
let var_humidity = document.querySelector('#var_humidity')
let var_pressure = document.querySelector('#var_pressure')
let var_windspeed = document.querySelector('#var_windspeed')
let var_dew = document.querySelector('#var_dew')
let var_description = document.querySelector('#var_description')
let var_visibility = document.querySelector('#var_visibility')
let var_city = document.querySelector('#city')

const API = () => {

    let city_name = search.value
    const KEY1 = "LAA9TEAKPTTR3KFBPJGQ2WET2";
    const KEY2 = "YPKEEMCGMP9CT9755C5EG5W77";

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_name}?key=${KEY2}`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data)
            showData(data)
            showTime(data.timezone)
            AQI(data.latitude, data.longitude)
            console.log(data.timezone)
            console.log(city_name)

        }

        )


}


const AQI = (LATITUDE, LONGITUDE) => {

    let aqiDesc = ["Air Quality is considered satisfactory, and air pollution posses little or no risk", "Air quality is acceptable; however, for some pollutants, there may be moderate health concern for a very small number of people who are unusually sensitive to air pollution", "Members of sensitive groups may experience health effects. The general public is not likely to be affected", "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects", "Health warnings of emergency conditions. The entire population is more likely to be affected"]

    fetch(`https://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=38df2a01-c313-4b69-8688-6d46283a5130`)
        .then((res) => res.json())
        .then((data) => {
            let aqi = data.data.current.pollution.aqius
            console.log(aqi, data)
            document.querySelector('#aqi-data').innerHTML = aqi

            switch (true) {
                case (aqi <= 50): {
                    document.querySelector('.aqi-details').innerHTML = aqiDesc[0];
                    document.querySelector('.rating').innerHTML = "Good";
                    document.querySelector('.in-circle').style.borderTop = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.in-circle').style.borderLeft = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.in-circle').style.borderRight = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.rating').style.color = "rgb(102, 238, 12)"
                    break;
                }
                case (aqi > 50 && aqi <= 100): {
                    document.querySelector('.aqi-details').innerHTML = aqiDesc[1];
                    document.querySelector('.rating').innerHTML = "Partially Good";
                    document.querySelector('.in-circle').style.borderTop = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.in-circle').style.borderLeft = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.in-circle').style.borderRight = "15px solid rgb(102, 238, 12)"
                    document.querySelector('.rating').style.color = "rgb(102, 238, 12)"
                    break;
                }
                case (aqi > 100 && aqi <= 150): {
                    document.querySelector('.aqi-details').innerHTML = aqiDesc[2];
                    document.querySelector('.rating').innerHTML = "Moderate";
                    document.querySelector('.in-circle').style.borderTop = "15px solid rgb(231, 122, 5)"
                    document.querySelector('.in-circle').style.borderLeft = "15px solid rgb(231, 122, 5)"
                    document.querySelector('.in-circle').style.borderRight = "15px solid rgb(231, 122, 5)"
                    document.querySelector('.rating').style.color = "rgb(231, 122, 5)"
                    break;
                }
                case (aqi > 150 && aqi <= 200): {
                    document.querySelector('.aqi-details').innerHTML = aqiDesc[3];
                    document.querySelector('.rating').innerHTML = "Unhealthy";
                    document.querySelector('.in-circle').style.borderTop = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.in-circle').style.borderLeft = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.in-circle').style.borderRight = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.rating').style.color = "rgb(231, 5, 5)"
                    break;
                }
                default: document.querySelector('.aqi-details').innerHTML = aqiDesc[4];
                    document.querySelector('.rating').innerHTML = "Very unhealthy";
                    document.querySelector('.in-circle').style.borderTop = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.in-circle').style.borderLeft = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.in-circle').style.borderRight = "15px solid rgb(231, 5, 5)"
                    document.querySelector('.rating').style.color = "rgb(231, 5, 5)"
                    break;
            }
        })

}

const showData = (data) => {

    let { temp, humidity, windspeed, pressure, visibility, dew, conditions } = data.currentConditions;

    let resolvedAddress = data.address
    let descrip = data.description;


    var_temperature.innerHTML = `${Math.round(((temp - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    var_humidity.innerHTML = humidity + " %";
    var_dew.innerHTML = dew;
    var_pressure.innerHTML = pressure + " hPa";
    var_windspeed.innerHTML = windspeed + " m/s";
    var_visibility.innerHTML = visibility + " m";
    var_city.innerHTML = String(resolvedAddress[0].toUpperCase() + resolvedAddress.slice(1))
    temperature.innerHTML = `${Math.round(((temp - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`

    var_description.innerHTML = descrip

    if (conditions === "Clear") {

        icon.innerHTML =
            `
            <i class='bx bxs-sun text-7xl md:text-9xl text-yellow-400'></i>
            `
    }
    else if (conditions === "Partially cloudy") {

        icon.innerHTML =
            `
            <i class='bx bx-cloud text-7xl md:text-9xl text-blue-400'></i>
            `
    }
    else if (conditions === "Rain") {
        icon.innerHTML =
            `
            <i class='bx bx-cloud-drizzle text-7xl md:text-9xl text-blue-400'></i>
        `
    }


    let day1 = data.days[0].temp
    let day2 = data.days[1].temp
    let day3 = data.days[2].temp
    let day4 = data.days[3].temp
    let day5 = data.days[4].temp
    let day6 = data.days[5].temp
    let day7 = data.days[6].temp

    let date1 = data.days[0].datetime
    let date2 = data.days[1].datetime
    let date3 = data.days[2].datetime
    let date4 = data.days[3].datetime
    let date5 = data.days[4].datetime
    let date6 = data.days[5].datetime
    let date7 = data.days[6].datetime



    let d1 = document.querySelector('#d-1')
    let d2 = document.querySelector('#d-2')
    let d3 = document.querySelector('#d-3')
    let d4 = document.querySelector('#d-4')
    let d5 = document.querySelector('#d-5')
    let d6 = document.querySelector('#d-6')
    let d7 = document.querySelector('#d-7')


    let t1 = document.querySelector('#temp1')
    let t2 = document.querySelector('#temp2')
    let t3 = document.querySelector('#temp3')
    let t4 = document.querySelector('#temp4')
    let t5 = document.querySelector('#temp5')
    let t6 = document.querySelector('#temp6')
    let t7 = document.querySelector('#temp7')



    d1.innerHTML = date1
    d2.innerHTML = date2
    d3.innerHTML = date3
    d4.innerHTML = date4
    d5.innerHTML = date5
    d6.innerHTML = date6
    d7.innerHTML = date7

    t1.innerHTML = `${Math.round(((day1 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t2.innerHTML = `${Math.round(((day2 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t3.innerHTML = `${Math.round(((day3 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t4.innerHTML = `${Math.round(((day4 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t5.innerHTML = `${Math.round(((day5 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t6.innerHTML = `${Math.round(((day6 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;
    t7.innerHTML = `${Math.round(((day7 - 32) * (5 / 9)) * 100) / 100}<sup>o</sup>C`;

    document.querySelector('#time-zone').innerHTML = `${data.timezone}`

}

const borderMode = () => {
    document.querySelector('.circle').style.border = "5px solid rgb(12, 132, 238)";

    (darkMode == true) ? document.querySelector('.circle').style.borderBottom = "5px solid rgb(0, 4, 32)" : document.querySelector('.circle').style.borderBottom = "5px solid white";
    (darkMode == true) ? document.querySelector('.in-circle').style.borderBottom = "15px solid rgb(0, 4, 32)" : document.querySelector('.in-circle').style.borderBottom = "15px solid white";
}

const toggleMode = () => {

    if (darkMode === true) {

        darkMode = false
    }
    else {

        darkMode = true
    }

    borderMode();






    // API();


    console.log(darkMode);

    document.body.classList.toggle('text-white')
    document.body.classList.toggle('bgcolor')
    let whiteborder = document.querySelector('.white-border')
    let whiteborder1 = document.querySelector('.white-border1')

    if (whiteborder.classList.contains('border-white')) {
        whiteborder.classList.remove('border-white')
        whiteborder.classList.add('border-black')
    }
    else {
        whiteborder.classList.add('border-white')
        whiteborder.classList.remove('border-black')
    }

    if (whiteborder1.classList.contains('border-white')) {
        whiteborder1.classList.remove('border-white')
        whiteborder1.classList.add('border-black')
    }
    else {
        whiteborder1.classList.add('border-white')
        whiteborder1.classList.remove('border-black')
    }

    let mode = document.querySelector('#mode')

    if (mode.classList.contains('bx-sun')) {
        mode.classList.remove('bx-sun')
        mode.classList.add('bxs-moon')
    }
    else {
        mode.classList.add('bx-sun')
        mode.classList.remove('bxs-moon')
    }
}

toggleMode();

const showTime = (zone) => {

    const TIME_API = () => {

        const KEY = "58206e5f387b4afb8e5dbcbf742d3503";

        fetch(`https://api.ipgeolocation.io/timezone?apiKey=${KEY}&tz=${zone}`)
            .then((x) => x.json())
            .then((data1) => {
                console.log(data1)
                time.innerHTML = data1.time_12
                day.innerHTML = data1.date
            })
    }

    TIME_API();
}

API();


const loader = () => {

    setTimeout(() => {
        let load = document.querySelector('.load')
        load.style.display = "none"
        document.querySelectorAll('.wait').forEach((element) => {
            element.style.opacity = "1"
        })
    }, 2500);
}


// setInterval(()=>{
//     window.location.reload()
// },1000)