$(document).ready(function(){
    $(".menu_list").on("click", function (e) {
        const target = e.target;
        if(!target.hasAttribute("href")) return false;
        // event.preventDefault();

        const id  = target.getAttribute("href");
        const top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});