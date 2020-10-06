getData();
async function getData() {

const res = await fetch("/api")
let data = await res.json()

for (item of data.userdata) {
    const root = document.createElement('p');
    const name = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');

    name.textContent = `name: ${item.name}`;
    geo.textContent = `${item.lat}°, ${item.long}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = 'prince';

    root.append(name, geo, date, image);
    document.body.append(root);
  }
console.log(data.userdata);

}

