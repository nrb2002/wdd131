const temperature = document.getElementById("temperature");
const weatherConditions = document.getElementById("weatherConditions");
const windSpeed = document.getElementById("windSpeed");
const windChill = document.getElementById("windChill");

let temp = 26;
let weather = "Cloudy";
let wind = 5;
                        
function calculateWindChill(t, v) {
  return v >= 4.8 && t <= 10 ? 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16) : t;
}
/**
 * Step-by-step explanation:

If the wind speed (v) is at least 4.8 km/h, AND the temperature (t) is 10°C or lower,
(windy and cold enough), we return the wind chill using this formula:

13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)

However, if the condition is false (too warm or not windy enough), we just return the actual temperature.
 * 
 */

temperature.textContent = `${temp} °C`;
weatherConditions.textContent = `${weather}`;
windSpeed.textContent = `${wind} km/h`;
windChill.textContent = calculateWindChill(temp,wind) + "°C";


                    