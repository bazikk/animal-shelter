"use strict"

const slider = document.querySelector(".dogs_shelter_slider");
const modalFrame = document.querySelectorAll(".modal_frame");

slider.addEventListener("click", (e)=>{
    e.preventDefault();
    const target = e.target;
    if(!target.classList.contains("btn")) return false;

    for(let i of modalFrame){
        if(i.getAttribute("data-modal") == target.closest(".slider_item").getAttribute("data-item")){
            i.classList.toggle("showOn");
            i.classList.remove("showOff");
            document.body.classList.add("overlay");
        }
    }

    
});

for(let i of modalFrame){
    i.querySelector(".close").addEventListener("click", (e)=>{
        if(i.classList.contains("showOn")){
            i.classList.toggle("showOff");
            i.classList.remove("showOn");
            document.body.classList.remove("overlay");
        }
    })
}

// window.addEventListener("resize" , (e)=>{
//     const windowWidth = document.documentElement.offsetWidth;
//     const btns = slider.querySelectorAll(".btn");
    
//     if(parseInt(windowWidth) < 740){
//         for(let i of btns){
//             i.textContent = "More";
//         }
//     }else{
//         for(let i of btns){
//             i.textContent = "Learn More";
//         }
//     }
// })

function btnText(){
    const windowWidth = document.documentElement.offsetWidth;
    const btns = slider.querySelectorAll(".btn");
    
    if(parseInt(windowWidth) < 740){
        for(let i of btns){
            i.textContent = "More";
        }
    }
}

btnText();
