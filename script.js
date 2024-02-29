var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1));
console.log(res);

var h1 = document.createElement("H1");
h1.className="text-center";
h1.setAttribute("id","title")
h1.innerHTML = "Weather Details from Rest Countries";

var div = document.createElement("div");
div.className="container";

var row = document.createElement("div");
row.className="row";

function bar(text){
    console.log(text);
    for(var i = 0; i<text.length;i++){
    var col = document.createElement("div");
    col.className="col-lg-4";
    col.innerHTML += `<div class="card">
    <h5 class="card-header">${text[i].name.common}</h5>
    <div class="card-body">
      <h5 class="card-title"><img src="${text[i].flags.png}" width="200px" height="100px"/></h5>
      <p class="card-text">Capital: ${text[i].capital}</p>
      <p class="card-text">Region: ${text[i].region}</p>
      <p class="card-text">Country Code: ${text[i].cca3}</p>
      <p class="card-text">Latitude and Longitude: ${text[i].latlng[1]} and ${text[i].latlng[0]}</p>
      <p class="card-text" id="head${i}"></p>
      <p class="card-text" id="sun${i}"></p>
      <p class="card-text" id="wea${i}"></p>
      <p class="card-text" id="deg${i}"></p>
      <a href="#" class="btn btn-primary" onclick="getWeather(${text[i].latlng[1]},${text[i].latlng[0]},${i})">Click for Weather</a>
    </div>
  </div>`;
  row.append(col);
  div.append(row);
  document.body.append(h1,div);
}
}
function getWeather(lng,lat,seq){
  var res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6c62c991a954e08df7056fb6d28403eb`)
.then((data)=>data.json()).then((data1)=>{
  console.log(data1);
  document.getElementById(`wea${seq}`).innerHTML = "Weather: "+data1.weather[0].description;
  document.getElementById(`deg${seq}`).innerHTML = "Degrees: "+data1.wind.deg;
  document.getElementById(`sun${seq}`).innerHTML = "Sunrise: "+data1.sys.sunrise + "; Sunrise: "+ data1.sys.sunset;
  document.getElementById(`head${seq}`).innerHTML = "<b>Weather Details</b>";
  document.getElementById(`head${seq}`).style = "background-color: yellow; font-size: 125%;";
//  sunrise: 1709179750, sunset: 1709220970
});

}