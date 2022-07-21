// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=41007815a25cc8e0197769e5266679bc

// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today

var sunrisesunsetContainer=document.querySelector('.sunrisesunsetContainer')

function getSunrisesunsetdata(){
    var cityName = document.querySelector('.cityname').value
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=41007815a25cc8e0197769e5266679bc`
    

    try{
      var req = fetch(url) 
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)    
            
            var lat = data.coord.lat
            var lon = data.coord.lon

            var request = fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today`) 
            .then((res)=>{return res.json()})
            .then((data1)=>{console.log(data1)           

            //Displaying the content dynamically using Javascript
        sunrisesunsetContainer.innerHTML=
        `<div class="card">
        <div class="card-header">
         <h3>Sunrise-sunset</h3>
        </div>
        <div class="card-body">  
          <p class="card-text"><h5>Sunrise:</h5>${data1.results.sunrise}</p>                      
          <p class="card-text"><h5>Sunset:</h5>${data1.results.sunset}</p>
          <p class="card-text"><h5>Day length:</h5>${data1.results.day_length} seconds</p>         
        </div>`        
    })
    })
    }
    catch(err){
        alert("city not found")
    }
 }
