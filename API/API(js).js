let city;

async function Sear(){
	let spinner = document.getElementById("spin");
	spinner.style.display = "inline";

	city = document.getElementById('search');
	let url = `https://goweather.herokuapp.com/weather/${city.value}`;

	let response = await fetch(url);
	let data = await response.json();

	p(data);

	spinner.style.display = "none";
}

function p(data){
	
	let today = [data.temperature, data.wind, data.description];
	let tomorrow = [data.forecast['0'].temperature, data.forecast['0'].wind];
	let after_tomorrow = [data.forecast['1'].temperature, data.forecast['1'].wind]

	document.getElementById("city").innerHTML = city.value + ' today:';
	document.getElementById("today_t").innerHTML = 'Temperature: ' + today[0];
	document.getElementById("today_w").innerHTML = 'Wind: ' + today[1];
	document.getElementById("today_d").innerHTML = 'Discription: ' + today[2];

	document.getElementById("city_tomorrow").innerHTML = city.value + ' tomorrow:';
	document.getElementById("tomorrow_t").innerHTML = 'Temperature: ' + tomorrow[0];
	document.getElementById("tomorrow_w").innerHTML = 'Wind: ' + tomorrow[1];

	document.getElementById("city_after_tomorrow").innerHTML = city.value + ' after tomorrow:';
	document.getElementById("after_tomorrow_t").innerHTML = 'Temperature: ' + after_tomorrow[0];
	document.getElementById("after_tomorrow_w").innerHTML = 'Wind: ' + after_tomorrow[1];




}
