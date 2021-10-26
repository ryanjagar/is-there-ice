# Is there ice?
For pretty obvious reasons weather reports and forcasts tell you what the weather currently is, or what it will soon be.  However, ice climbers often want to know if there were good conditions for building ice.  Basically, they want to know what was the weather like for the last few days.  This is an app to answer the question *"Have the last ten days been good for building ice for climbing?"*

## Want to add a location?
Are you a ice climber?  Would you like to see the last few days of weather for your favourite climbing sport?  If so, log an issue with a name and a location and I'll see about adding it to the list. 

## How it works
The technology and approaches used in this app were an experiment to see what kinds of solutions can be developed with low cost (free!) and low technical overhead.
### Data collection
Weather data is collected nightly from [OpenWeather](https://openweathermap.org/appidlocations).  Scheduling and data processing is done using GitHub [Flat Data](https://next.github.com/projects/flat-data).

### Presentation
[VueJS](https://vuejs.org) styled with [Vuetify](https://vuetifyjs.com/en/).  [ChartJS](https://www.chartjs.org) provides the pretty graphs.  Hosting is a batteries included service from [GitHub Pages](https://guides.github.com/features/pages/)   
