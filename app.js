
const author = document.getElementById('author')
const currency = document.getElementById('currency')
const crypto = document.getElementById('crypto')
const time = document.getElementById('time')
const url='https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'


async function handleImageGeneartion(){
const res = await fetch(url)
const data = await res.json()
document.body.style.background=`url(${data.urls.regular})`
author.textContent=`${data.user.name}`
}
async function handleExchangeRates() {
const res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
const data = await res.json()
document.getElementById("crypto-top").innerHTML = `
<img src=${data.image.small} />

<span>${data.name}</span>`
crypto.innerHTML += `
<p>🎯: $${data.market_data.current_price.usd}</p>
<p>👆: $${data.market_data.high_24h.usd}</p>
<p>👇: $${data.market_data.low_24h.usd}</p>
`
}
function getTime(){
  const date= new Date()
  const formattedTime  = date.toLocaleTimeString("en-us", {timeStyle: "short"})
  time.innerHTML=`${formattedTime}`

}

function getGeoLocation(){
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);}


getGeoLocation()
setInterval(getTime,1000)
handleExchangeRates()
handleImageGeneartion()

