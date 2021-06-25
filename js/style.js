var header = document.getElementById("header");
var mobiMenu = document.getElementById("menu-mobi");
var headerHeight = header.clientHeight;

mobiMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = "auto";
    }else{
        header.style.height = null;
    }
}