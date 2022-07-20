$(document).ready(function () {
    $(".owl-carousel.slide_1").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:false,
        responsiveClass:true,
        responsive:{
            425:{
                items: 2,
            },
            640:{
                items: 3,
            },
            992:{
                items: 4,
            },
            1200:{
                items: 5,
            }

        }
    });
    var owl = $('.owl-carousel.slide_1');
    owl.owlCarousel();
    $('.os_div_next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.os_div_prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    var carousel= $(".owl-carousel.slide_1");
    checkClasses();
    carousel.on('translated.owl.carousel', function(event){
    checkClasses();
    });

    function checkClasses(){
        $('.owl-carousel.slide_1 .owl-stage .owl-item.active').removeClass('firstActiveItem');

        $('.owl-carousel.slide_1 .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                $('.owl-carousel.slide_1 .owl-stage .owl-item.active .slide1').addClass('firstActiveItem');
            }
        });
        if($('.owl-carousel.slide_1 .owl-stage .owl-item.active .slide1').hasClass('firstActiveItem')==true){
            $('.os_div_prev').css('display','none');
        }
        else{
            $('.os_div_prev').css('display','flex');
        }
    }


    $(".owl-carousel.slide_2").owlCarousel({
        items:4,
        loop:true,
        nav:false,
        dots:true,
        margin: 30,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                margin: 0,
                dots: false
            },
            525:{
                items: 2,
                margin: 5
            },
            750:{
                items: 3,
                margin: 15
            },
            1024:{
                items: 4,
            },
            1280:{
                items: 5,
                margin: 10
            }
        }
    });

    var selectos_owl = $('.owl-carousel.slide_2');
    selectos_owl.owlCarousel();
    $('.selectos_div_next').click(function() {
        selectos_owl.trigger('next.owl.carousel');
    });
    $('.selectos_div_prev').click(function() {
        selectos_owl.trigger('prev.owl.carousel');
    });

    /* Select server owl-carousel */
    $(".owl-carousel.slide_3").owlCarousel({
        items:1,
        loop: true,
        nav:false,
        dots:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                margin:0,
            },
            525:{
                items: 1,
                margin: 10
            },
            575:{
                items:2,
                margin: 0
            },
            800:{
                items: 3,
            },
            1024:{
                items: 4,
                margin: 0
            },
            1280:{
                items: 5,
                margin: 20
            },
            1367:{
                items: 5,
                margin: 48
            }
        }
    });

    var selectserver_owl = $('.owl-carousel.slide_3');
    selectserver_owl.owlCarousel();
    $('.selectserver_div_next').click(function() {
        selectserver_owl.trigger('next.owl.carousel');
    });
    $('.selectserver_div_prev').click(function() {
        selectserver_owl.trigger('prev.owl.carousel');
    });

    /* var carousel3= $(".owl-carousel.slide_3"); */
    /* $('.selectserver_div_prev').css('display','none'); */
    checkClasses3();
    selectserver_owl.on('translated.owl.carousel', function(event){
    checkClasses3();
    });

    function checkClasses3(){
        $('.owl-carousel.slide_3 .owl-stage .owl-item.active').removeClass('firstActiveItem');

        $('.owl-carousel.slide_3 .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                $('.owl-carousel.slide_3 .owl-stage .owl-item.active .slide3_1').addClass('firstActiveItem');
            }
        });
        if($('.owl-carousel.slide_3 .owl-stage .owl-item.active .slide3_1').hasClass('firstActiveItem')==true){
            $('.selectserver_div_prev').css('display','none');
        }
        else{
            $('.selectserver_div_prev').css('display','flex');
        }
    }
});

var all_btn= document.getElementById('active_btn');
function selectos_btn(){
    all_btn.style.color= '#434343';
}
function selectos_btn_all(){
    all_btn.style.color= '#F28A49';
}
var all_btn2= document.getElementById('active_btn2');
function server_btn(){
    all_btn2.style.color= '#434343';
}
function server_btn_all(){
    all_btn2.style.color= '#F28A49';
}

$('#monthly_btn').click(function() {
        $('#move').css('transform', 'translateX(142px)');
        $('#move').css('transition', 'all 1s');
        $('.hourly_label').css('color', '#494949');
        $('.monthly_label').css('color', '#FFFFFF');
        $('.plan_container_content').css('display', 'none');
        $('.plan_container_content_monthly').css('display', 'flex');
});
$('#hourly_btn').click(function() {
        $('#move').css('transform', 'translateX(0px)');
        $('.monthly_label').css('color', '#494949');
        $('.hourly_label').css('color', '#FFFFFF');
        $('.plan_container_content_monthly').css('display', 'none');
        $('.plan_container_content').css('display', 'flex');
});