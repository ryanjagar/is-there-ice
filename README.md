# Is there ice?
For pretty obvious reasons weather reports and forcasts tell you what the weather currently is or what it will soon be.  However, ice climbers often want to know if  weather conditions have been good for building ice.  Basically, they want to know what was the weather like for the last few days.  This is an app to answer the question *"Have the last ten days been good for building ice for climbing?"*

## Want to add a location?
Are you an ice climber?  Would you like to see the last few days of weather for your favourite climbing spot?  If so, log an issue with the name and a location and I'll see about adding it to the list. 

## Limitations
- OpenWeather uses a number or sources to build their [weather model](https://openweathermap.org/accuracy-and-quality).  However weather models can break down, especially when dealing with local mountain conditions.  Actual on-the-ground conditions may differ significatly from what's presented here. 
- -7 celcius is an arbitrary temperature, which in my expereince in Northern Canada seems to be the warmest temperature that quickly builds good quality ice. 

## How it works
The technology and approaches used in this app were an experiment to see what kinds of solutions can be developed with low cost (free!) and low technical overhead.

### Data collection
Weather data is collected nightly from [OpenWeather](https://openweathermap.org/appidlocations).  Scheduling and data processing is done using GitHub [Flat Data](https://next.github.com/projects/flat-data).

### Presentation
The app uses [VueJS](https://vuejs.org) with [Vuetify](https://vuetifyjs.com/en/) for reactivity, layout, and styling.  [ChartJS](https://www.chartjs.org) provides the pretty graphs.  Hosting is a batteries-included service from [GitHub Pages](https://guides.github.com/features/pages/) which works really nicely with Javascript SPA's.   
