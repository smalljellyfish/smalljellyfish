//Javascript
function donate(){
    var txt;
    if(confirm("你真的要抖內喔?")){
        txt = "但我沒地方給你抖內";
    } else{
        txt = "你好壞喔";
    }
    alert(txt);
}
function about(){
    alert("這就是個關於我的網站,這按鈕放好玩的");
}
// JQuery

$(document).ready(function(){
    // RWD 漢堡選單
    $('.menu-toggle').click(function(){
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.nav .nav-link').removeClass('btn');
    });
    $('.nav-link').click(function(){
        $('.nav').removeClass('active');
        $('.menu-toggle').removeClass('active');
        $('.nav .nav-link').addClass('btn');
    });
    // slider 滾動相簿
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});
