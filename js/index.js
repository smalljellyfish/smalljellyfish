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

    // $('.menu-toggle').on('click',function(){
    //     $(this).toggleClass('active');
    //     $('.navbar .nav').toggleClass('active');
    // })
    // $('.nav-link').on('click',function(){
    //     $('.menu-toggle').removeClass('active');
    //     $('.navbar .nav').removeClass('active');
    // })
    // slider 滾動相簿
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            600:{
                items:4
            }
        }
    });
    
    // one page scroll
    $('.js-nav').onePageNav({
        currentClass:'active',
        changeHash:false,
        scrollSpeed:750,
        scrollThreshold:0.5,
        filter:'',
        easing:'swing'
    });

    //scrollreveal
    ScrollReveal().reveal('.js-fedInBottom',{
        duration:800,
        origin:'bottom',
        distance:'50px',
        delay:200,
        reset:true
    });
    ScrollReveal().reveal('.js-fedInTop',{
        duration:800,
        origin:'top',
        distance:'50px',
        delay:200,
        reset:true
    });
    ScrollReveal().reveal('.js-fedInLeft',{
        duration:800,
        origin:'left',
        distance:'50px',
        delay:200,
        reset:true
    });
    ScrollReveal().reveal('.js-fedInRight',{
        duration:800,
        origin:'right',
        distance:'50px',
        delay:200,
        reset:true
    });
    // ScrollReveal().reveal('.service-item',{
    //     duration:800,
    //     origin:'bottom',
    //     distance:'50px',
    //     reset:true,
    //     interval:300
    // });
});
