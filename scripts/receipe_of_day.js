import {navbarFun,getData,display} from "../components/navbarComp.js"
let nav_div = document.querySelector("nav");
nav_div.innerHTML = navbarFun()

let url = `https://www.themealdb.com/api/json/v1/1/random.php`

let data = await getData(url)
console.log('data:', data)

let disp_div = document.getElementById("display")
display(data.meals,disp_div)
