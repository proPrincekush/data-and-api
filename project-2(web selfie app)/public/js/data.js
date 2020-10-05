async function fetchData() {
    const res = await fetch('Zonal.csv')
    const data = await res.text()
    // console.log(data);
    return data;
}


async function parseData() {
    const data  = await fetchData()
    // console.log(data);
    const rows = data.split('\n').slice(1);

    let years = []
    let temp = []
    let neH =[]
    let seH = []
    rows.forEach(row =>{
        // console.log(row.slice(0,2));
        const column = row.split(',').slice(0,4)
        // console.log(column);
        years.push(column[0])
        temp.push(14+Number(column[1]))
        neH.push(14+Number(column[2]))
        seH.push(14+Number(column[3]))
    })
    // console.log(years,temp,neH,seH);
    return{years,temp}
}

