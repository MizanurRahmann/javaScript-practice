async function getWeather(woeid) {
    try{
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);

        return data;
    } catch(error){
        alert(error);
    }
}

getWeather(2487956);

let dataLondon;
getWeather(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});