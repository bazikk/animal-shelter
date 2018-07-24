const slider = document.querySelector(".dogs_shelter_slider");

(function(){
    const windowWidth = document.documentElement.offsetWidth;
    const btns = slider.querySelectorAll(".btn");
    
    if(parseInt(windowWidth) < 740){
        for(let i of btns){
            i.textContent = "More";
        }
    }
})();
