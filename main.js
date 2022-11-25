
document.querySelector('button').addEventListener('click',findActivity) 

function findActivity(){
    fetch("https://www.boredapi.com/api/activity") 
    .then(res=>res.json()) 
    .then(data=>{
        console.log(data) 
        document.querySelector('h1').innerText= data.activity 
        document.querySelector('p').innerText=data.participants 
        document.querySelector('i').innerText=data.type 
        document.querySelector('h3').innerText=data.price
    }) 
    .catch(err=>{
        console.log(err)
    })
}
