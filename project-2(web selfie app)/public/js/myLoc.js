// const e = require("express");

 async function getLoc() {
    if('geolocation' in navigator){
        console.log('geolocation available in navigator');
        navigator.geolocation.getCurrentPosition(position=>{
            // console.log(position.coords.latitude,position.coords.longitude);
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            document.getElementById('lat').textContent= lat.toFixed(2)
            document.getElementById('long').textContent= long.toFixed(2)
            
            // displaying the user on map
            showOnMap(lat,long).then(()=>{
               console.log('here you are..');
           })

        })
    }else{
        console.log('geolocation not available..');
    }
 }
 
 
 async function showOnMap(lat,long) {
    
    const mymap = L.map('mapid').setView([lat,long],5);
    const attribution =
    `&copy; 
    <a href="https://www.openstreetmap.org/copyright">
    OpenStreetMap</a> contributors`;

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
     const tile_layer = L.tileLayer(tileUrl,{attribution})
     tile_layer.addTo(mymap)
     L.marker([lat,long]).addTo(mymap)
     console.log(lat,long);
}

getLoc();

const form = document.getElementById('form')
form.addEventListener("submit",SubmitData)

function SubmitData(event) {
    event.preventDefault();
    const name = form[0].value;
    const lat = document.getElementById('lat').textContent;
    const long = document.getElementById('long').textContent;
    const data = {name,lat,long};
    const options ={
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
       body:JSON.stringify(data)
    }
    const resp = fetch("/api",options)
    .then(res=>{
        return res.json()
    }).then(jsondata=>{
        console.log(jsondata);
       
    }) 

 
}