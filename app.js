const author = document.getElementById('author');
const currency = document.getElementById('currency');
const crypto = document.getElementById('crypto');
const time = document.getElementById('time');
const weather = document.getElementById('weather');
const url =
	'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature';

  async function handleImageGeneartion() {
    const res = await fetch(url);
    const data = await res.json();
    document.body.style.background = `url(${data.urls.regular}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    author.textContent = `${data.user.name}`;
  }
  
async function handleExchangeRates() {
	const res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoin');
	const data = await res.json();
	document.getElementById('crypto-top').innerHTML = `
<img src=${data.image.small} />

<span>${data.name}</span>`;
	crypto.innerHTML += `
<p>🎯: $${data.market_data.current_price.usd}</p>
<p>👆: $${data.market_data.high_24h.usd}</p>
<p>👇: $${data.market_data.low_24h.usd}</p>
`;
}
function getTime() {
	const date = new Date();
	const formattedTime = date.toLocaleTimeString('en-us', {
		timeStyle: 'short',
	});
	time.innerHTML = `${formattedTime}`;
}

function getGeoLocation() {
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};

	async function success(pos) {
		const crd = pos.coords;
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);

		const res = await fetch(
			`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric`
		);
		const data = await res.json();
		console.log(data);
		const iconURl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
		const temperature = Math.round(data.main.temp);
		const city = data.name;
		weather.innerHTML = `<img src=${iconURl}>
                <p class="weather-temp">${temperature}º</p>
                <p class="weather-city">${city}</p>
    `;
		console.log(iconURl);
	}
	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	navigator.geolocation.getCurrentPosition(success, error, options);
}

getGeoLocation();
setInterval(getTime, 1000);
handleExchangeRates();
handleImageGeneartion();
