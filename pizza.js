let pizza_img = document.querySelector("#pizza_img");


window.onscroll = function(){
    let val = scrollY;
    pizza_img.style.rotate = val*.25 + "deg";
}
$(function(){
    $("#list_span").click(function(){
        $("#toggle_list").toggle(500);
        $("#toggle_hide_open").toggle(400);
        $("#toggle_hide_close").toggle(400);
    })
})
