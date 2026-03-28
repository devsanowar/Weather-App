import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key:'e82a33368aefc44bfde7ba25f23ca153',
    weather_icon:'https://openweathermap.org/payload/api/media/file/',
    location_query:'',
    weather:{}
  }),
  getters: {},
  actions: {
    async fatchWeather(e){
      if(e.key == 'Enter'){
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`)
        console.log(data);

        this.weather = data;
      }
    }
  }
})
