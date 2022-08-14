import { getData,navbarFun,display } from "../components/navbarComp.js";

let navDiv = document.querySelector("nav");
navDiv.innerHTML=navbarFun()

let url = `https://www.themealdb.com/api/json/v1/1/random.php`

let dataArray = []

for(let i=0;i<10;i++)
{
    let data = await getData(url)
    dataArray.push(data.meals[0])
}
console.log(dataArray)


let display_div = document.getElementById("display")
display(dataArray,display_div)

