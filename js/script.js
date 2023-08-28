let btns = document.querySelectorAll(".button");
// let active= document.getElementById("active")
let product=document.getElementsByClassName("product")
let srting="";
// console.log(btns)
// btns[4].addEventListener("click",()=>{
//     if (btns[4].getAttribute("id")=="") {
//         btns[4].setAttribute("id","active")
//         for (let index = 0; index < (btns.length)-1; index++) {
//             btns[index].removeAttribute("id")     }

//     }
//     product[0].innerHTML=` <img src="images/blue.png" alt="">`
// })
// console.log(active)
Array.from(btns).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.innerText)
        document.getElementById("active").removeAttribute("id")
        
            e.target.setAttribute("id","active")    
            // console.log(active)
        srting=e.target.innerText;
        product[0].innerHTML=` <img src="images/${srting}.png" alt="">`
    })
    
})