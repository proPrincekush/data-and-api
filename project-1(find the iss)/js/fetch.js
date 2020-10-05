
catchImage()
.then(()=>console.log("yay!"))
.catch(err=>{
    console.log(err);
    document.getElementById('image').alt="person@work image";
})


async function catchImage() {
    const res = await fetch('images/person@work.jpg');
    const img = document.getElementById("image")
    img.src = res.url;
}


catchTxt()

async function catchTxt() {
    const res = await fetch("sample/sampleFile.txt")
    console.log(res);
    const para = document.getElementById("para")
    para.innerText= await res.text();
}


function OlderFetch() {
fetch("person@work.jpg")
    .then(res =>{
        console.log(res);
        // return res.blob()
        document.getElementById('image').src= res.url;
    })
    // .then(blob=>{
    //     console.log(blob)
    //     console.log(URL.createObjectURL(blob));
    //     document.getElementById('image').src = URL.createObjectURL(blob);
    //     })
    .catch(err=>{
        console.log(err)
        document.getElementById('image').alt= "person@work image";
    })

}
   

multiImage()

async function multiImage(){
let  div = ""
// let html ="";
const  files = ['person@work.jpg','unsplash.jpg'];
for (const file of files) {
    const res = await fetch("images/"+file);
    console.log(res.url);
    
   let html = `
    <img src="${res.url}" alt="image" width="400px" height="300px">
    `
    div+=html
}
document.getElementById('multi').innerHTML = div;

}



