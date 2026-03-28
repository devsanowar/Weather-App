<script setup>
import { useWeatherStore } from './stores/weather';
const weatherStore = useWeatherStore();

</script>

<template>
  <div class="container">
      <div class="wraper">
          <!--Search box -->
          <div class="search-box">
              <input type="text" v-model="weatherStore.location_query" @keypress="weatherStore.fatchWeather" class="search-field" placeholder="Search...">
          </div>

          <!-- Weather Info -->
          <div class="weather-info" v-if="weatherStore.weather?.main">
              <div class="location-box">
                  <div class="location">{{ weatherStore.weather.name }} / {{ weatherStore.weather.sys?.country }}</div>
                  <div class="date">15-03-2026</div>
              </div>

              <div class="weather-box">
                  <div class="temp">{{ weatherStore.weather.main?.temp }}°C</div>
                  <div class="weather" >  {{ weatherStore.weather.weather[0]?.description || 'Loading...' }} </div>
                  <div class="icon">
                    <img src="https://openweathermap.org/payload/api/media/file/10d@2x.png" alt="">
                  </div>
              </div>
              <div class="other-info">
                  <div class="info">
                      <h4>Wind</h4>
                      <p>Speed : {{ weatherStore.weather.wind?.speed }}</p>
                  </div>
                  <div class="info">
                      <h4>Pressure</h4>
                      <p>{{ weatherStore.weather.main?.pressure }}MB</p>
                  </div>
                  <div class="info">
                      <h4>Humidity</h4>
                      <p>{{ weatherStore.weather.main?.humidity }}%</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  background: url('./assets/images/weather-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 30%;
  margin: 0 auto;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
}

.wraper{
  height: 100%;
  padding: 30px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.55));
  border-radius: 10px;
}

.search-box .search-field{
  display: block;
  width: 100%;
  padding: 10px 15px;
  color: #333333;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background:none;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 10px;
  transition: 0.4s;
}

.search-box .search-field:focus{
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
}

.location-box .location{
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  font-style: italic;
  margin-top: 20px;
}

.location-box .date{
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}

.weather-box{
  text-align: center;
}

.weather-box .temp[data-v-7a7a37b1] {
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	font-size: 70px;
	font-weight: 700;
	text-shadow: 2px 2px rgba(0, 0, 0, 0.12);
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	margin: 30px 0;
	box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  font-style: italic;
}

.weather-box .weather{
  color: #fff;
  font-size: 50px;
  font-style: italic;
  font-weight: 600;
}

.other-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.other-info .info{
  text-align: center;
  color: #fff;
}

.other-info .info h4{
  font-size: 20px;
  font-weight: 500;
}

.other-info .info p{
  font-size: 16px;
  font-weight: 300;
}

</style>
