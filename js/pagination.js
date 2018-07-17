(function(){
    const pagination = document.querySelector(".pagination_container");

    for(let i of pagination.children){
        if(parseInt(i.textContent) >= 10){
            i.style.paddingLeft = `13px`;
            i.style.paddingRight = `13px`;
        }
    }
})();