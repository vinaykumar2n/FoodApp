import {navbarFun,getData,display} from "../components/navbarComp.js"
let nav_div = document.querySelector("nav");
nav_div.innerHTML = navbarFun()

let id, main,debounce,displayDropdown;
let input_div=document.getElementById("inputbox")

let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
let dropdown_div = document.getElementById("dropdown")
debounce = (fun,delay)=>{
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        fun()
    },delay)
}

let display_div = document.getElementById("display")

main = async()=>{
    let searchVal = input_div.value
    console.log('searchVal:', searchVal)
    let updUrl = url+searchVal
    let prodData = await getData(updUrl)
    console.log('prodData:', prodData.meals)
    if(searchVal) displayDropdown(prodData.meals)
    else dropdown_div.style.display="none"

}

displayDropdown = (data)=>{
    dropdown_div.innerHTML=null;
    dropdown_div.style.display="block"
    let list=document.createElement("ul")
    list.setAttribute("class","droplist")
    data.forEach((el,i)=>{
        let litem = document.createElement("li");
        litem.setAttribute("class","litem")
        litem.innerText = el.strMeal;
        litem.addEventListener("click",()=>{
            let array = []
            array.push(el)
            display(array,display_div)
            dropdown_div.style.display="none"
        })

        list.append(litem)
        
    })
    dropdown_div.append(list)
}



document.getElementById("inputbox").addEventListener("input",()=>{
    debounce(main,1000)
})
