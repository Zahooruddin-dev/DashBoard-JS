
const author = document.getElementById('author')
const currency = document.getElementById('currency')
const crypto = document.getElementById('crypto')
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
console.log(data);
document.getElementById("crypto-top").innerHTML = `
<img src=${data.image.small} />
<span>${data.name}</span>
`
/**
* Challenge: Add the following data points underneath the 
* name and icon (1 paragraph each):
* 
* 1. Current price (data.market_data.current_price.usd)
* 2. 24-hour high price (data.market_data.high_24h.usd)
* 3. 24-hour low price (data.market_data.low_24h.usd)
* 
* Feel free to check the response data object for your own currency
* if you don't want to use USD.
*/
document.getElementById("crypto").innerHTML += `
<p>🎯: $${data.market_data.current_price.usd}</p>
<p>👆: $${data.market_data.high_24h.usd}</p>
<p>👇: $${data.market_data.low_24h.usd}</p>
`
}
handleExchangeRates()
handleImageGeneartion()

