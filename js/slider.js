"use strict"
//const slider = document.querySelector(".dogs_shelter_slider");
const sliderItemsContainer = slider.querySelector(".slider_items_container");
let position = 0;


slider.querySelector(".prev").onclick = ()=>{
    prevItem();
}

slider.querySelector(".next").onclick = ()=>{
    nextItem();
}

function nextItem(){
    const sliderItems = sliderItemsCount(slider);
    const itemWidth = sliderItemWidth(sliderItems);

    position = Math.max(position - itemWidth, -itemWidth * (sliderItems.length - 3));
    sliderItemsContainer.style.marginLeft = `${(position* 100)/sliderItemsContainer.offsetWidth}%`;
}

function prevItem(){
    const sliderItems = sliderItemsCount(slider);
    const itemWidth = sliderItemWidth(sliderItems);

    position = Math.min(position + itemWidth, 0);
    sliderItemsContainer.style.marginLeft = `${(position* 100)/sliderItemsContainer.offsetWidth}%`;
}

function sliderItemsCount(slider){
    const sliderItems = slider.querySelectorAll(".slider_item");
    
	return sliderItems;
}

function sliderItemWidth(sliderItemsCount){
    const sliderItemStyle = getComputedStyle(sliderItemsCount[0]);
    const itemWidth = sliderItemsCount[0].offsetWidth + parseInt(sliderItemStyle.marginRight) + parseInt(sliderItemStyle.marginLeft);
                          
    return itemWidth;
  }

