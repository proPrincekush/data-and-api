function plotChart(years,temp){
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Global Average Temperatue(in °C)',
            data: temp,
            fill:false,
            borderColor: 'rgba(255, 99, 132, 1)' ,
            borderWidth: 2
        }]
    }
});
}

parseData().then(data=>{
    plotChart(data.years,data.temp)
})
