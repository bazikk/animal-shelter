"use strict"
const sliderItemsContainer = slider.querySelector(".slider_items_container");
let position = 0;
$(".prev").addClass("no_hover");

slider.querySelector(".prev").onclick = ()=>{
    prevItem();
    if(position == 0) $(".prev").addClass("no_hover");
}

slider.querySelector(".next").onclick = ()=>{
    nextItem();
    if(position !== 0) $(".prev").removeClass("no_hover");
}

function nextItem(){
    const sliderItems = sliderItemsCount(slider);
    const itemWidth = sliderItemWidth(sliderItems);

    position = Math.max(position - itemWidth, -itemWidth * (sliderItems.length - 3));
    if(position == (-itemWidth * (sliderItems.length - 3))) $(".next").addClass("no_hover");
    sliderItemsContainer.style.marginLeft = `${(position* 100)/sliderItemsContainer.offsetWidth}%`;
}

function prevItem(){
    const sliderItems = sliderItemsCount(slider);
    const itemWidth = sliderItemWidth(sliderItems);

    position = Math.min(position + itemWidth, 0);
    if(position !== (-itemWidth * (sliderItems.length - 3))) $(".next").removeClass("no_hover");
    sliderItemsContainer.style.marginLeft = `${(position* 100)/sliderItemsContainer.offsetWidth}%`;
}

function sliderItemsCount(slider){
    const sliderItems = slider.querySelectorAll(".slider_item");
    
	return sliderItems;
}

function sliderItemWidth(sliderItemsCount){
    const sliderItemStyle = getComputedStyle(sliderItemsCount[0]);
    const itemWidth =sliderItemsCount[0].offsetWidth + parseFloat(sliderItemStyle.marginRight) + parseFloat(sliderItemStyle.marginLeft);

    return Math.ceil(itemWidth);
  }

