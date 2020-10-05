if('geolocation' in navigator){
    console.log('geolocation available in navigator');
    navigator.geolocation.getCurrentPosition(position=>{
        console.log(position.coords.latitude,position.coords.longitude);
    })
}else{
    console.log('geolocation not available..');
}