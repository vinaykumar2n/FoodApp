
let navbarFun = ()=>{
    return `
        <div id="appName"><h3>Food App</h3></div>
        <div id="navOptions">
            <h3><a href="./index.html">Home</a></h3>
            <h3><a href="./receipe_of_day.html">Receipe of the day</a></h3>
            <h3><a href="./random_receipe.html">Random receipes</a></h3>
        </div>`
}

let getData = async(updUrl)=>{
    try{
        let res = await fetch(updUrl)
        let firstData = await res.json()
        return firstData
    } catch(err){
        console.log('err:', err)

    }

}

let display= (dataArray,display_div)=>{

    display_div.innerHTML=null;
    display_div.style.display="block"

    dataArray.forEach((ele)=>{
        

        let ing_arr = ingredients(ele)
        let ingred = ing_arr[0]
        let mes = ing_arr[1]

        let box = document.createElement("div");
        box.setAttribute("id","boxdiv")

        let top_div = document.createElement("div");
        top_div.setAttribute("class","topDiv")

        // left div--------------------------------

        let leftDiv = document.createElement("div")
        leftDiv.setAttribute("class","left");

        let img = document.createElement("img")
        img.src = ele.strMealThumb;
        leftDiv.append(img)

        // right Div -----------------------------

        let rightDiv = document.createElement("div")
        rightDiv.setAttribute("class","right")

        let heading = document.createElement("h2")
        heading.style.textAlign="center"
        heading.innerText= ele.strMeal

        let ing_div = document.createElement("div");
        ing_div.setAttribute("class","allIng")
        let ingred_heading = document.createElement("h4");
        ingred_heading.innerText="Ingredients"
        ingred_heading.style.marginTop ="0px"
        ing_div.append(ingred_heading)

        for(let i=0;i<mes.length;i++)
        {
            let singleIng = document.createElement("p")
            singleIng.innerText = `${ingred[i]} - ${mes[i]}`
            ing_div.append(singleIng)
        }

        // bottom div ----------------------------------
        let bottom_div = document.createElement("div");
        bottom_div.setAttribute("class","bottomDiv")

        let instrHeading = document.createElement("h3");
        instrHeading.innerText="Instructions:"

        let instructions = document.createElement("p")
        instructions.innerText=ele.strInstructions;
        bottom_div.append(instrHeading,instructions);
        

        rightDiv.append(ing_div)

        top_div.append(leftDiv,rightDiv)
        box.append(heading,top_div,bottom_div)
        display_div.append(box)
        console.log(ele)
    })

}



let ingredients = (el)=>{
    let i,count=1,ing=[],mes=[],cou =1;
    for(let key in el)
    {
        if(key == `strIngredient${count}` && el[key] && el[key]!= " " && count<=20)
        {
            ing.push(el[key])
            count++
        }
        
        else if(key == `strMeasure${cou}` && el[key] && el[key] != " " && cou<=20)
        {
            mes.push(el[key])
            cou++
        } 
    }
    return [ing,mes]
}

export {navbarFun, getData,display}