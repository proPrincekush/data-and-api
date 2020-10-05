const url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getIssData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    const {longitude,latitude} = data;

    document.getElementById("long").textContent = longitude.toFixed(2);
    document.getElementById("lat").textContent = latitude.toFixed(2);

    return {longitude,latitude}
}




async function setMap(){
    const res = await getIssData();
    const mymap = L.map('mapid').setView([res.latitude,res.longitude], 3);
    const attribution =
    `&copy; 
    <a href="https://www.openstreetmap.org/copyright">
    OpenStreetMap</a> contributors`;

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const tile_layer = L.tileLayer(tileUrl, {attribution});

    tile_layer.addTo(mymap)

    addMarker(mymap,res.latitude,res.longitude)

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
  

mymap.on('click', onMapClick);

}





function addMarker(mymap,lat,long) {
   
    var myIcon = L.icon({
        iconUrl: 'images/ISS.png',
        iconSize: [80, 100],
        iconAnchor: [40, 50],
    });


    const marker = L.marker([lat,long],{icon:myIcon}).addTo(mymap);

    marker.bindPopup('<p>Currently here the ISS is</p>').openPopup();
}


// setMap();
setInterval(()=>{ setMap(); }, 3000);